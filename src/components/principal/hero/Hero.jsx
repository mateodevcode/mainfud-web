import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <div className="w-1/2 mx-auto flex flex-col items-center justify-center">
        <Image
          src="/hero/img-mf.png"
          alt="Hero Image"
          width={1000}
          height={800}
        />
      </div>
      <div className="w-1/2 mx-auto flex flex-col font-sans gap-2">
        <h2 className="text-4xl 2xl:text-5xl font-bold">
          Lo que tu restaurante necesita.
        </h2>
        <span className="italic text-gray-600 text-xl">
          Tu restaurante, más eficiente. Tus clientes, más felices
        </span>
        <p className="text-gray-700 text-xl">
          Mainfud es el sistema{" "}
          <strong className="text-[#ff3131]">todo-en-uno</strong> para
          restaurantes que quieren simplificar pedidos, ahorrar tiempo y vender
          más. Tus clientes ordenan fácil desde su móvil, tú controlas todo
          desde tu panel. Simple, rápido y efectivo.
        </p>
        <div className="w-full flex items-center justify-end gap-4 mt-4">
          <button className="font-semibold text-sm bg-black text-white px-6 py-2 rounded-full hover:bg-black/80 transition-colors h-full cursor-pointer select-none active:scale-95 duration-200">
            Empezar ahora
          </button>
          <button className="font-semibold text-sm bg-[#ff3131] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]/80 transition-colors h-full cursor-pointer select-none active:scale-95 duration-200">
            Ver demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
