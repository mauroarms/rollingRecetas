const URI_Recetas = import.meta.env.VITE_API_RECETAS;

console.log(URI_Recetas);

//POST (agregar a la API)

export const crearRecetaAPI = async (receta) => {
  try {
    const respuesta = await fetch(URI_Recetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
