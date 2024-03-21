import React from "react";
import CardReceta from "./CardReceta";
import { obtenerListaRecetasAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";

const Recetas = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
    const respuesta = await obtenerListaRecetasAPI();
    if (respuesta.status === 200) {
      const recetasAPI = await respuesta.json();
      setRecetas(recetasAPI);
      console.log(recetasAPI);

    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Intentelo nuevamente más tarde",
      });
    }
  };

  return (
    <section className="grillaProductos">
      {recetas.map((receta) => (
        <CardReceta 
          key={receta.id}
          id={receta.id}
          imagen={receta.imagen}
          nombre={receta.nombre}
          descripcionBreve={receta.descripcionBreve}
          descripcionAmplia={receta.descripcionBreve}
          categoria={receta.categoria}
        />
      ))}

    </section>
  );
};

export default Recetas;
