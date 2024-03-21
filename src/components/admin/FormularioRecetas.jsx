import { Button, Container, Form } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { crearRecetaAPI, editarRecetaAPI, obtenerRecetaPorIdAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const FormularioRecetas = ({ editar }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  // ARRAY
  const { fields: pasos, append: appendPaso } = useFieldArray({
    control,
    name: "pasos",
  });
  const { fields: ingredientes, append: appendIngrediente } = useFieldArray({
    control,
    name: "ingredientes",
  });
  const [cantidadPasos, setCantidadPasos] = useState(2);
  const [cantidadIngredientes, setCantidadIngredientes] = useState(2);
  const handleCantidadPasosChange = (event) => {
    setCantidadPasos(parseInt(event.target.value)); 
  };
  const handleCantidadIngredientesChange = (event) => {
    console.log(cantidadIngredientes);
    setCantidadIngredientes(parseInt(event.target.value)); 
  };


  // EDITAR
  const { idReceta } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (editar) {
      cargarReceta(idReceta);
    }
  }, []);

  const cargarReceta = async (idBusqueda) => {
    
    const respuesta = await obtenerRecetaPorIdAPI(idBusqueda);
    if (respuesta.status === 200) {
      const recetaEncontrada = await respuesta.json();
      setValue("nombre", recetaEncontrada.nombre);
      setValue("imagen", recetaEncontrada.imagen);
      setValue("descripcionBreve", recetaEncontrada.descripcionBreve);
      setValue("descripcionAmplia", recetaEncontrada.descripcionAmplia);
      setValue("categoria", recetaEncontrada.categoria);
      setValue("cantidadPasos", recetaEncontrada.pasos.length)
      setValue("cantidadIng", recetaEncontrada.ingredientes.length)
      setCantidadPasos(recetaEncontrada.pasos.length)
      setCantidadIngredientes(recetaEncontrada.ingredientes.length)
      recetaEncontrada.pasos.map((paso, index)=>{
        setValue(`pasos.${index}`, paso)
      })
      recetaEncontrada.ingredientes.map((ingrediente, index)=>{
        setValue(`ingredientes.${index}`, ingrediente)
      })

    }
  };

  const onSubmit = async (receta) => {
    if(editar){
      const respuesta = await editarRecetaAPI(receta, idReceta);
      if (respuesta.status === 200) {
        Swal.fire({
          title: `${receta.nombre} fue modificado correctamente`,
          text: "¿Qué desea realizar?",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: `Seguir modificando ${receta.nombre}`,
          cancelButtonText: "Volver a Administración",
        }).then(async (result) => {
          if (!result.isConfirmed) {navigate("/admin");} 
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La receta no fue agregada, intentelo nuevamente más tarde",
        });
      }

    }else{
      const respuesta = await crearRecetaAPI(receta);
      console.log(respuesta);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto Agregado",
          text: `Se agregó ${receta.nombre} exitosamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La receta no fue agregada, intentelo nuevamente más tarde",
        });
      }
    }

  };

  return (
    <Container className="my-5">
      <Button className="btnPrincipal btnVolver" as={Link} to="/">
        Cancelar
      </Button>

      <h1 className="display-5">{editar ? "Editar" : "Agregar"} Producto</h1>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* titulo */}
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de la receta"
            {...register("nombre", {
              required: "Ingrese un nombre",
              minLength: {
                value: 2,
                message: "Ingrese un nombre con mínimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Ingrese un nombre con máximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>

        {/* img */}
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>URL de la imagen:</Form.Label>
          <Form.Control
            type="text"
            placeholder="www.ejemplo.com"
            {...register("imagen", {
              required: "Ingrese una imagen",
              pattern: {
                value: /(http)=?s?:?(\/\/[^"'"]*\.(?:png|jpg|jpeg|gif|svg))/i,
                message: "Ingrese una url de una imagen png, jpg, gif, svg",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        {/* desc brev */}
        <Form.Group className="mb-3" controlId="formDescBreve">
          <Form.Label>Descripción breve:</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Descripción breve de la receta"
            {...register("descripcionBreve", {
              required: "Ingrese una descripción breve del producto",
              minLength: {
                value: 5,
                message:
                  "Ingrese una descripcion breve con mínimo 5 caracteres",
              },
              maxLength: {
                value: 200,
                message:
                  "Ingrese una descripcion breve con máximo 200 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>

        {/* desc amp */}
        <Form.Group className="mb-3" controlId="formDescAmplia">
          <Form.Label>Descripción amplia:</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Descripción amplia de la receta"
            {...register("descripcionAmplia", {
              required: "Ingrese una descripción",
              minLength: {
                value: 10,
                message:
                  "Ingrese una descripcion amplia con mínimo 10 caracteres",
              },
              maxLength: {
                value: 1000,
                message: `Ingrese una descripcion amplia con máximo 1000 caracteres `,
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>

        {/* categoria */}
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria:</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Seleccione una Categoría",
            })}
          >
            <option value="">Seleccione una Opción</option>
            <option value="Parrilla">Parrilla</option>
            <option value="Vegano">Vegano</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Entradas y Aperitivos">Entradas y Aperitivos</option>
            <option value="Guarniciones">Guarniciones</option>
            <option value="Desayunos y Brunch">Desayunos y Brunch</option>
            <option value="Saludable">Saludable</option>
            <option value="Ensaladas">Ensaladas</option>
            <option value="Recetas Express">Recetas Express</option>
            <option value="Batidos">Batidos</option>
          </Form.Select>
        </Form.Group>
        <hr />

        {/* pasos e ingredientes*/}
        <section className="d-flex gap-5 mt-4">
          {/* Pasos */}
          <article className="w-50">
            <h1>Pasos</h1>
            <Form.Group className="mb-3" controlId="formCantidadPasos">
              <Form.Label>Cantidad de Pasos:</Form.Label>
              <Form.Select
                value={cantidadPasos}
                onChange={handleCantidadPasosChange}
                {...register("cantidadPasos", {
                  required: "Seleccione una Cantidad de Pasos",
                })}
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </Form.Group>

            {Array.from({ length: cantidadPasos }).map((_, index) => (
              <Form.Group
                key={index}
                className="mb-3"
                controlId={`pasos[${index}]`}
              >
                <Form.Label>Paso {index + 1}:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Paso ${index + 1}`}
                  {...register(`pasos.${index}`, {
                    required: "Ingrese una descripción de paso",
                    minLength: {
                      value: 2,
                      message: "Ingrese un paso con mínimo 2 caracteres",
                    },
                    maxLength: {
                      value: 200,
                      message: "Ingrese un paso con máximo 200 caracteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.pasos?.[index]?.message}
                </Form.Text>
              </Form.Group>
            ))}
          </article>

          {/* Ingredientes */}
          <article className="w-50">
            <h1>Ingredientes</h1>
            <Form.Group className="mb-3" controlId="formCantidadIngredientes">
              <Form.Label>Cantidad de Ingredientes:</Form.Label>
              <Form.Select
                value={cantidadIngredientes}
                onChange={handleCantidadIngredientesChange}
                {...register("cantidadIng", {
                  required: "Seleccione una Cantidad de Ingredientes",
                })}
              >
                
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </Form.Group>

            {Array.from({ length: cantidadIngredientes }).map((_, index) => (
              <Form.Group
                key={index}
                className="mb-3"
                controlId={`ingredientes[${index}]`}
              >
                <Form.Label>Ingrediente {index + 1}:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Ingrediente ${index + 1}`}
                  {...register(`ingredientes.${index}`, {
                    required: "Ingrese el ingrediente",
                    minLength: {
                      value: 2,
                      message: "Ingrese un ingrediente con mínimo 2 caracteres",
                    },
                    maxLength: {
                      value: 200,
                      message:
                        "Ingrese un ingrediente con máximo 200 caracteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.ingredientes?.[index]?.message}
                </Form.Text>
              </Form.Group>
            ))}
          </article>
        </section>

        <Button
          type="submit"
          className="btnPrincipal ms-auto mt-5"
          variant="warning"
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioRecetas;
