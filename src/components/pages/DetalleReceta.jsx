import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../../css/detalleProducto.css";
import { Link, useParams } from "react-router-dom";
import Recetas from "../receta/Recetas";
import { obtenerRecetaPorIdAPI } from "../../helpers/queries";

const Receta = () => {
  const [nombre, setNombre] = useState();
  const [imagen, setImagen] = useState();
  const [descripcionBreve, setdescripcionBreve] = useState();
  const [descripcionAmplia, setdescripcionAmplia] = useState();
  const [categoria, setCategoria] = useState();
  const [ingredientes, setIngredientes] = useState([]);
  const [pasos, setPasos] = useState([]);

  const { idReceta } = useParams();
  useEffect(() => {
    cargarReceta(idReceta);
  }, []);

  const cargarReceta = async (idBusqueda) => {
    console.log(idBusqueda);
    const respuesta = await obtenerRecetaPorIdAPI(idReceta);
    if (respuesta.status === 200) {
      const recetaEncontrada = await respuesta.json();
      console.log(recetaEncontrada);
      setNombre(recetaEncontrada.nombre);
      setImagen(recetaEncontrada.imagen);
      setdescripcionAmplia(recetaEncontrada.descripcionAmplia);
      setdescripcionBreve(recetaEncontrada.descripcionBreve);
      setCategoria(recetaEncontrada.categoria);
      setIngredientes(recetaEncontrada.ingredientes);
      setPasos(recetaEncontrada.pasos);
    }
  };

  return (
    <>
      <div className="position-relative">
        <div className="backgroundProducto">
          <img src={imagen} alt="imgProducto" />
        </div>

        <div className="contenidoProducto rounded-4">
          <div className="image-section">
            <img src={imagen} alt="imgProducto" className="rounded-start-4" />
          </div>
          <div className="content-section">
            <h6 className="mb-4">{categoria}</h6>
            <h1 className="display-6">{nombre}</h1>

            <div className="mt-4">
              <strong>Descripción:</strong>
              <p>{descripcionBreve}</p>
            </div>

            <div className="btnConteiner">
              <Button
                className="btnPrincipal"
                variant="warning"
                as={Link}
                to="/"
              >
                Volver
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-4">
        <Container className="mb-5">
          <h1 className="my-5 display-5">Sobre esta comida</h1>
          <div className="contenidoAbout">
            <article className="descAmplia">{descripcionAmplia}</article>
            <article className="icono">
              <img
                src="https://cdn-icons-png.freepik.com/256/1830/1830839.png"
                alt="logoRollingCoffee"
                className="img-fluid ms-auto"
                width={200}
              />
            </article>
          </div>
        </Container>
      </section>

      <div className="mt-5">
        <h1 className="text-center display-4 ">¿Cómo preparar {nombre}? </h1>
      </div>

      <Container className="contPasosIngredientes">
        <article className="w-25">
          <h2 className="mt-4 display-6">Ingredientes:</h2>
          <div class="mt-4 border border-warning rounded">
            <div className="p-3">
              <h4 className="pt-4">Necesitaras:</h4>
              <ul className="px-4">
                {ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <article>
          <h2 className="mt-4 display-6">Pasos:</h2>
          <div className="mt-5">
            <ol className="pt-4">
              {pasos.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ol>
          </div>
        </article>
      </Container>

      <Container className="mt-5">
        <h1 className="mt-4 display-5">También te podría gustar...</h1>
        <hr />
        <Recetas idRecetaAcceso={idReceta}></Recetas>
      </Container>
    </>
  );
};

export default Receta;
