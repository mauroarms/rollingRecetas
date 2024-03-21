import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../css/cardProducto.css";
import { Link } from "react-router-dom";

const CardReceta = ({id, imagen, nombre, descripcionBreve, categoria}) => {

  return (
    <Card className="cardProducto">
      <Card.Img className="imgCard" variant="top" src={imagen} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Container>
          <Card.Text className="mb-0 text-secondary">{categoria}</Card.Text>

          <Card.Title className="tituloProducto mb-3">{nombre}</Card.Title>

          <Card.Text>
            {descripcionBreve}
          </Card.Text>
        </Container>

        <Button
          className="btnPrincipal ms-auto my-auto"
          variant="warning"
          as={Link}
          to={id}
          
        >
          Ver
        </Button>
      </Card.Body>
    </Card>
  );
};

//   margin: auto 0 10px auto;

export default CardReceta;
