import React from "react";
import { Button, Container } from "react-bootstrap";
import "../../css/detalleProducto.css";
import { Link } from "react-router-dom";
import Productos from "../producto/Productos";

const Producto = () => {
  const imagen =
    "https://www.serargentino.com/public/images/2020/05/pollo-al-champi%C3%B1%C3%B3n-773x458.jpeg";
  const nombre = "Pollo al Champiñon";
  const descripcion = "Jugosos trozos de pollo salteados con champiñones frescos en una deliciosa salsa cremosa.";
  const categoria = "Restaurant";
  const precio = "7500";

  return (
    <>
      <div className="position-relative">
        <div className="backgroundProducto">
          <img src={imagen} alt="imgProducto" />
        </div>

        <div className="contenidoProducto">
          <div className="image-section">
            <img src={imagen} alt="imgProducto" />
          </div>
          <div className="content-section">
            <h6 className="mb-4">{categoria}</h6>
            <h1 className="display-6">{nombre}</h1>

            <div className="mt-0 mb-4">
              <p> Precio: ${precio}</p>
            </div>
            <div>
              <strong>Descripción:</strong>
              <p>
                {descripcion}
              </p>
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
      <Container>
        <h1 className="mt-4 display-5">También te podría gustar...</h1>
        <hr />
        <Productos></Productos>
      </Container>
    </>
  );
};

export default Producto;
