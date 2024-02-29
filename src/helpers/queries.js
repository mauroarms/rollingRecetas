const URI_Producto = import.meta.env.VITE_API_PRODUCTOS

console.log(URI_Producto)

//POST (agregar a la API)

const crearProductoAPI = async (producto) =>{
    try{
        const respuesta = await fetch(URI_Producto);
    }catch(error){
        console.log(error)
    }
}