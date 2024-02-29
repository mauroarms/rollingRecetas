import { Button, Container } from "react-bootstrap";
import error404 from "../../assets/error404.png";

const Error404 = () => {
  return (
    <Container className="d-flex align-items-center flex-column">
      <img src={error404} alt="" />
      <Button className="btnPrincipal" variant="warning">
        Volver
      </Button>
    </Container>
  );
};

export default Error404;