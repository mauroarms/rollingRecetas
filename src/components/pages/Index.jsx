import { Container } from "react-bootstrap";
import Recetas from "../receta/Recetas";

const Index = () => {
  return (
    <div>
      <img src="https://www.paulinacocina.net/wp-content/uploads/2023/09/batch-cooking-saludable.jpg" alt="imgBanner" className="banner"/>
      <Container>
        <h1 className="mt-4 display-5">Nuestras Deliciosas Recetas</h1>
        <hr />
        <Recetas></Recetas>
      </Container>
    </div>
  );
};

export default Index;
