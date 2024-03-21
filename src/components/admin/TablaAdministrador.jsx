import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { borrarRecetaAPI, obtenerListaRecetasAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


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

  const borrarReceta = (receta) => {
    Swal.fire({
      title: `Estás seguro que deseas borrar "${receta.nombre}"`,
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaAPI(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: `Se borró "${receta.nombre}" de la lista de Recetas`,
            text: "Receta borrado exitosamente",
            icon: "success",
          });
          obtenerRecetas();
        } else {
          Swal.fire({
            title: `No se pudo borrar "${receta.nombre}" de la lista de recetas`,
            text: "Intente de nuevo más tarde",
            icon: "error",
          });
        }
      }
    });
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
                  onClick={() => borrarReceta(receta)}
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
