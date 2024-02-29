import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TablaAdministrador = () => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Cod</th>
          <th>Titulo</th>
          <th>Descripcion Breve</th>
          <th>Descripcion Amplia</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Ingredientes</th>
          <th>Pasos</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pollo al Champiñon</td>
          <td>Jugosos trozos de pollo salteados con champiñones frescos en una deliciosa salsa cremosa.</td>
          <td>Jugosos trozos de pollo salteados con champiñones frescos en una deliciosa salsa cremosa.</td>
          <td className="d-flex">
            <img
              src="https://www.serargentino.com/public/images/2020/05/pollo-al-champi%C3%B1%C3%B3n-773x458.jpeg"
              alt=""
              width={230}
              height={150}
              className="m-auto"
            />
          </td>
          <td>Restaurant</td>
          <td>Restaurant</td>
          <td>Restaurant</td>
          <td>
            <div className="d-flex flex-column mt-3 align-items-center">
              <Button variant="warning">
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button variant="danger" className="mt-5">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Pollo al Champiñon</td>
          <td>Jugosos trozos de pollo salteados con champiñones frescos en una deliciosa salsa cremosa.</td>
          <td>Jugosos trozos de pollo salteados con champiñones frescos en una deliciosa salsa cremosa.</td>
          <td className="d-flex">
            <img
              src="https://www.serargentino.com/public/images/2020/05/pollo-al-champi%C3%B1%C3%B3n-773x458.jpeg"
              alt=""
              width={230}
              height={150}
              className="m-auto"
            />
          </td>
          <td>Restaurant</td>
          <td>Restaurant</td>
          <td>Restaurant</td>
          <td>
            <div className="d-flex flex-column mt-3 align-items-center">
              <Button variant="warning">
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button variant="danger" className="mt-5">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </td>
        </tr>

      </tbody>
    </Table>
  );
};

export default TablaAdministrador;
