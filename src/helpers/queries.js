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

//GET

export const obtenerListaRecetasAPI = async () => {
    try {
      const respuesta = await fetch(URI_Recetas);
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.error(error);
    }
};

export const obtenerRecetaPorIdAPI = async (idReceta) => {
  try{
    const respuesta = await fetch(`${URI_Recetas}/${idReceta}`)
    return respuesta

  }catch(error){
    console.error(error)
  }
}




//DELETE

export const borrarProductoAPI = async (idProducto) => {
  try {
    const respuesta = await fetch(`${URI_Recetas}/${idProducto}`, {
      method: "DELETE"
    });
    console.log(respuesta)
    return respuesta
  } catch (error) {
    console.log(error);
  }
};

//PUT

export const editarProductoAPI = async (producto, idProducto) =>{
  try{
    const respuesta = await fetch(`${URI_Recetas}/${idProducto}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto)
    });
    console.log(respuesta);
    return respuesta
  }catch(error){
    console.log(error)
  }
}
