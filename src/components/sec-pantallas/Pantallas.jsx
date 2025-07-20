import Image from "next/image";
import React from "react";

const Pantallas = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto bg-stone-100">
      <div className="w-11/12 flex flex-col md:flex-row items-center justify-between p-8">
        <div className="w-full md:w-1/2 mx-auto flex flex-col items-center justify-center">
          <Image
            src="/pantallas/pantallas.png"
            alt="Hero Image"
            width={1000}
            height={800}
          />
        </div>
        <div className="w-full md:w-1/2 mx-auto flex flex-col font-sans gap-2 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold">
            De la cocina al cliente, todo sincronizado.
          </h2>
          <span className="italic text-gray-600 text-base md:text-lg lg:text-xl">
            Digitaliza pedidos, menú, ventas e inventario con Mainfud
          </span>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl">
            Conecta todos los puntos de tu operación: clientes ordenan desde su
            móvil, tú gestionas pedidos en tiempo real, y administras ventas,
            inventario y contabilidad desde un solo lugar. Fácil, rápido y sin
            complicaciones.
          </p>
          <div className="w-full flex items-center justify-center md:justify-center gap-4 mt-4">
            <button className="font-semibold text-sm bg-black text-white px-6 py-2 rounded-full hover:bg-black/80 transition-colors h-full cursor-pointer select-none active:scale-95 duration-200">
              Explorar funciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pantallas;
