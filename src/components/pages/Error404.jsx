import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="d-flex align-items-center flex-column">
      <h1 className="display-6 mt-4">Página no encontrada... ERROR 404</h1>
      <img src="https://i.makeagif.com/media/4-22-2022/XEx9cp.gif" alt="" />
      <Button
          className="btnPrincipal "
          variant="warning"
          as={Link}
          to="/"
        >
          Volver
        </Button>
    </Container>
  );
};

export default Error404;