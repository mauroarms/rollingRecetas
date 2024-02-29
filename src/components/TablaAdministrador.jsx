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
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Cappuchino</td>
          <td>$1200</td>
          <td className="d-flex">
            <img
              src="https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/cheat-menu-saudi/products/cappuchino-Cappuccino_-_12Oz.jpg"
              alt=""
              width={230}
              height={150}
              className="m-auto"
            />
          </td>
          <td>Bebida Caliente</td>
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
          <td>2</td>
          <td>Café Americano</td>
          <td>$1000</td>
          <td className="d-flex">
            <img
              src="https://www.elglobo.com.mx/cdn/shop/products/americano-3_800x.jpg?v=1618806696"
              alt=""
              width={230}
              height={150}
              className="m-auto"
            />
          </td>
          <td>Bebida Caliente</td>
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
