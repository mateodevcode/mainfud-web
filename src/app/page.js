import BotonWhatsapp from "@/components/botonFlotante/BotonWhatsapp";
import Principal from "@/components/principal/Principal";
import Pantallas from "@/components/sec-pantallas/Pantallas";
import React from "react";

const page = () => {
  return (
    <>
      <Principal />
      <Pantallas />
      <BotonWhatsapp />
    </>
  );
};

export default page;
