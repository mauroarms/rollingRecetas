import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../css/cardProducto.css";
import { Link, NavLink } from "react-router-dom";

const CardProducto = ({ imagen, nombre, descripcion, categoria}) => {
  return (
    <Card className="cardProducto">
      <Card.Img className="imgCard" variant="top" src={imagen} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Container>
          <Card.Text className="mb-0 text-secondary">{categoria}</Card.Text>

          <Card.Title className="tituloProducto mb-3">{nombre}</Card.Title>

          <Card.Text>
            <strong>
              Descripción: <br />
            </strong>
            {descripcion}
          </Card.Text>
        </Container>

        <Button
          className="btnPrincipal ms-auto my-auto"
          variant="warning"
          as={Link}
          to="/producto"
        >
          Ver
        </Button>
      </Card.Body>
    </Card>
  );
};

//   margin: auto 0 10px auto;

export default CardProducto;
