"use client";

import Image from "next/image";
import React from "react";
import { RiMenu5Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between p-4 sticky top-0 z-50">
      <div className="w-full lg:w-7/12 bg-stone-100 flex items-center justify-between rounded-full p-2 h-14">
        <div className="w-[120px] h-[25px] relative mx-1">
          <Image
            src="/logo/logo.png"
            fill
            priority
            className="object-contain"
            alt="Mainfud Logo"
            title="Mainfud Logo"
          />
        </div>

        <ul className="text-amber-zinc-800 text-sm font-semibold font-sans md:flex items-center justify-between gap-8 mx-4 hidden">
          <li className="hover:text-black/50 cursor-pointer select-none active:scale-95">
            Productos
          </li>
          <li className="hover:text-black/50 cursor-pointer select-none active:scale-95">
            Precios
          </li>
          <li className="hover:text-black/50 cursor-pointer select-none active:scale-95">
            Nosotros
          </li>
          <li className="hover:text-black/50 cursor-pointer select-none active:scale-95">
            Recursos
          </li>
        </ul>

        <button
          className="mx-4 cursor-pointer select-none active:scale-95 duration-300 hover:text-[#ff3131] flex lg:hidden"
          onClick={() => alert("Menu clicked")}
        >
          <RiMenu5Line className="text-3xl" />
        </button>
      </div>
      <div className="md:w-80 bg-stone-100 hidden lg:flex items-center justify-between rounded-full p-2 h-14 font-sans">
        <button className="font-semibold text-sm bg-[#ff3131] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]/80 transition-colors h-full cursor-pointer select-none active:scale-95 duration-200">
          Prueba una demo
        </button>
        <button className="font-semibold text-sm bg-black text-white px-6 py-2 rounded-full hover:bg-black/80 transition-colors h-full cursor-pointer select-none active:scale-95 duration-200">
          Soy Mainfud
        </button>
      </div>
    </div>
  );
};

export default Header;
