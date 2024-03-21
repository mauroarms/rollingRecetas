import { Container, Button, Card } from "react-bootstrap";
import "../../css/cardReceta.css";
import { Link, useNavigate } from "react-router-dom";

const CardReceta = ({id, imagen, nombre, descripcionBreve, categoria }) => {

  const urlAcceso = `/receta/${id}`

  return (
    <Card className="cardProducto">
      <Card.Img className="imgCard" variant="top" src={imagen} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Container>
          <Card.Text className="mb-0 text-secondary">{categoria}</Card.Text>

          <Card.Title className="tituloProducto mb-3">{nombre}</Card.Title>

          <Card.Text>{descripcionBreve}</Card.Text>
        </Container>
      </Card.Body>
      <Card.Footer className="footerProducto mt-3">
        <Button
          className="btnPrincipal mx-auto"
          variant="warning"
          as={Link}
          to={urlAcceso}
        >
          Ver
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardReceta;
