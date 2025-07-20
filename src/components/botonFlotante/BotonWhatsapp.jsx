"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { BsPatchCheckFill } from "react-icons/bs";
import { toast } from "sonner";
import { iconoLogo } from "@/data/logo";
import { botonWhatsapp } from "@/data/boton-wp";
import useDetectarPais from "@/hooks/useDetectarPais";

const BotonWhatsapp = () => {
  const [modalOpenBotonFlotante, setModalOpenBotonFlotante] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [show, setShow] = useState(false);
  const { pais } = useDetectarPais();

  const handleMensaje = (e) => {
    if (mensaje.trim() === "") {
      toast.error("Por favor, escribe un mensaje antes de enviar.", {
        duration: 3000,
        position: "top-right",
        style: {
          background: "#FEE2E2",
          color: "#B91C1C",
          borderColor: "#B91C1C",
        },
      });
      return;
    } else {
      setShow(true);
      toast.success("Mensaje enviado correctamente.", {
        duration: 3000,
        position: "top-right",
        style: {
          backgroundColor: "#34d777",
          color: "#000",
          borderColor: "#000",
        },
      });

      setTimeout(() => {
        const url = `https://wa.me/${
          pais === "Colombia"
            ? botonWhatsapp.numeros[1]
            : botonWhatsapp.numeros[0]
        }?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
      }, 1500);
      setMensaje("");
      setModalOpenBotonFlotante(false);
      setShow(false);
    }
  };

  return (
    <>
      <div
        className="fixed z-50 right-2 md:right-10 bottom-5 rounded-full cursor-pointer hover:text-white/80 text-white dark:text-white shadow-lg dark:shadow-white/10 shadow-black/10 hover:opacity-70 transition-all duration-300 hover:scale-105"
        onClick={() => {
          setModalOpenBotonFlotante(!modalOpenBotonFlotante);
        }}
      >
        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-black/50 cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95">
          <FaWhatsapp className="text-3xl" />
        </div>
      </div>

      <AnimatePresence>
        {modalOpenBotonFlotante && (
          <div
            className="fixed z-20 w-full h-full bottom-0 top-0 left-0 right-0 flex items-center justify-center"
            onClick={() => setModalOpenBotonFlotante(false)}
          >
            <motion.div
              className="absolute bottom-20 right-4 md:right-6 gap-1 z-40 flex flex-col items-center w-72 mr-10 h-80 bg-zinc-600 p-[1px] rounded-md border-0 shadow-lg shadow-black"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex justify-between items-center flex-col h-full w-full rounded-md overflow-hidden"
                style={{
                  backgroundImage: "url(/boton-wp/fondo-wp.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full">
                  <div className="h-10 bg-white w-full flex flex-row items-center justify-start px-4">
                    <div className="bg-zinc-100 w-7 h-7 rounded-full flex items-center justify-center">
                      <Image
                        src={iconoLogo.src}
                        alt={iconoLogo.alt}
                        width={50}
                        height={50}
                        className="w-6 h-6"
                      />
                    </div>
                    <p className="ml-3 mr-1 font-semibold text-sm text-black">
                      {botonWhatsapp.nombre}
                    </p>
                    <BsPatchCheckFill className="text-green-600 ml-2" />
                  </div>
                  <div className="w-full text-center mb-3">
                    <span className="text-[10px] bg-green-300 p-1 text-black px-3 rounded-full">
                      Hoy
                    </span>
                  </div>
                  <div className="w-full flex flex-col items-end justify-center h-20 mt-10">
                    <div className="gap-2 grid">
                      <p className="text-black text-xs p-2 bg-green-300 rounded-sm w-max max-w-52 mr-4">
                        {botonWhatsapp.chat[0]}
                      </p>
                      <p className="text-black text-xs p-2 bg-green-300 rounded-sm w-max mr-4">
                        {botonWhatsapp.chat[1]}
                      </p>
                    </div>
                  </div>

                  {show && (
                    <div className="w-full flex flex-col items-start justify-center h-20 mt-5">
                      <div>
                        <p className="text-black text-xs p-1.5 bg-white rounded-sm w-52 ml-2">
                          {mensaje}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full flex flex-row items-center justify-between h-12 mt-5 bg-white">
                  <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-60 h-10 rounded-md px-2 py-1.5 bg-zinc-100 text-sm mx-2 placeholder:text-zinc-400 text-black focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent border-0 placeholder:text-xs"
                  />
                  <button
                    className="bg-green-500 hover:bg-green-600 rounded-full p-2 mx-2 cursor-pointer text-white"
                    onClick={handleMensaje}
                  >
                    <IoSendSharp className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BotonWhatsapp;
