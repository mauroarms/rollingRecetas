import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { obtenerListaRecetasAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TablaAdministrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
    const respuesta = await obtenerListaRecetasAPI();
    if (respuesta.status === 200) {
      const recetas = await respuesta.json();
      setRecetas(recetas);
      console.log(recetas);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Intentelo nuevamente más tarde",
      });
    }
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Cod</th>
          <th>Titulo</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {recetas.map((receta) => (
          <tr key={receta.id}>
            <td>{receta.id}</td>
            <td>{receta.nombre}</td>
            <td className="d-flex">
              <img
                src={receta.imagen}
                alt="imgReceta"
                width={230}
                height={150}
                className="m-auto"
              />
            </td>
            <td>{receta.categoria}</td>
            <td>
              <div className="d-flex flex-column mt-3 align-items-center">
                {/* Editar fila */}
                <Link
                  className="btnPrincipal"
                  to={`/admin/editar/${receta.id}`}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>

                {/* Borrar fila */}
                <Button
                  className="mt-5 btnBorrar"
                  
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaAdministrador;
