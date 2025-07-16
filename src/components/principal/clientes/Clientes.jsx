import { clientes } from "@/data/clientes";
import Image from "next/image";
import React from "react";

const Clientes = () => {
  return (
    <div className="overflow-hidden w-full py-2 relative">
      <div className="flex animate-scroll w-[200%]">
        {[...clientes, ...clientes, ...clientes].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/7 flex justify-center items-center p-2"
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
