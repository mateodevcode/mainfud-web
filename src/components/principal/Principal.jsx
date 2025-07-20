"use client";

import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Clientes from "./clientes/Clientes";
import Pantallas from "../sec-pantallas/Pantallas";

const Principal = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col items-center justify-center">
        <Header />
        <Hero />
      </div>
      <Clientes />
    </div>
  );
};

export default Principal;
