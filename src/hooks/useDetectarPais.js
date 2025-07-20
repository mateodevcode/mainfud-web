import { useState, useEffect } from "react";

export default function useDetectarPais() {
  const [pais, setPais] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setPais(data.country_name); // "Colombia", "Spain", etc.
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener país:", error);
        setLoading(false);
      });
  }, []);

  return { pais, loading };
}
