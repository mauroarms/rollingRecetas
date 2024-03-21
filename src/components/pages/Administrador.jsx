import { Container} from "react-bootstrap";
import TablaAdministrador from "../admin/TablaAdministrador";
import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between mt-4">
          <h1 className=" display-5">Todas las Recetas</h1>
          <div className="d-flex justify-content-center">
            <Link className="btnPrincipal my-4 " to="/admin/agregar">
              Agregar Producto
            </Link>
          </div>
        </div>
        <hr />
        <TablaAdministrador></TablaAdministrador>
      </Container>
    </>
  );
};

export default Administrador;
