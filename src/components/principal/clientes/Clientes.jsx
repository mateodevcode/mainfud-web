import { clientes } from "@/data/clientes";
import Image from "next/image";
import React from "react";

const Clientes = () => {
  return (
    <div className="overflow-hidden w-full py-2 relative">
      <h2 className="text-center font-bold text-xl md:text-2xl z-10 relative">
        Nuestros Clientes confían en nosotros
      </h2>

      {/* Degradado izquierdo */}
      <div className="absolute left-0 top-0 w-52 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

      {/* Degradado derecho */}
      <div className="absolute right-0 top-0 w-52 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      <div className="flex animate-scroll w-[200%]">
        {[...clientes, ...clientes, ...clientes].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/12 flex justify-center items-center p-2"
          >
            <Image
              src={src}
              alt={`Cliente ${index + 1}`}
              width={200}
              height={100}
              className="max-w-[120px] w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientes;
