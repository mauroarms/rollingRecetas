import { Button, Form } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { crearRecetaAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useState   } from "react";


const FormularioRecetas = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


  const { fields, append } = useFieldArray({
    control,
    name: "pasos", // Nombre del campo de array
  });
  const [cantidadPasos, setCantidadPasos] = useState(1);
  const handleCantidadPasosChange = (event) => {
    setCantidadPasos(parseInt(event.target.value)); // Parseamos el valor a entero
  };

  const onSubmit = async (receta) => {
    console.log(receta);

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
  };

  return (
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
              value: 30,
              message: "Ingrese un nombre con máximo 30 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
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
        <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
      </Form.Group>

      {/* desc brev */}
      <Form.Group className="mb-3" controlId="formDescBreve">
        <Form.Label>Descripción breve:</Form.Label>
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Descripción breve de la receta"
          {...register("descripcionBreve", {
            required: "Ingrese una descripción",
            minLength: {
              value: 5,
              message:
                "Ingrese una descripcion amplia con mínimo 30 caracteres",
            },
            maxLenght: {
              value: 700,
              message:
                "Ingrese una descripcion amplia con máximo 700 caracteres",
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
            min: {
              value: 5,
              message: "Ingrese una descripcion breve con mínimo 10 caracteres",
            },
            max: {
              value: 150,
              message:
                "Ingrese una descripcion breve con mínimo 150 caracteres",
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
          <option value="Restaurant">Restautant</option>
          <option value="Entradas y Aperitivos">Entradas y Aperitivos</option>
          <option value="Guarniciones">Guarniciones</option>
          <option value="Desayunos y Brunch">Desayunos y Brunch</option>
          <option value="Saludable">Saludable</option>
          <option value="Recetas Express">Recetas Express</option>
          <option value="Batidos">Batidos</option>
        </Form.Select>
      </Form.Group>

      {/* ingredientes */}
      <Form.Group className="mb-3" controlId="formIngredientes">
        <Form.Label>Ingredientes:</Form.Label>
        <Form.Control
          className="barraIngrediente"
          type="text"
          placeholder="Ingredientes línea por línea"
          {...register("ingredientes", {
            required: "Ingrese el ingrediente",
            minLength: {
              value: 10,
              message:
                "Ingrese una descripcion de ingredientes con mínimo 10 caracteres",
            },
            maxLenght: {
              value: 800,
              message:
                "Ingrese una descripcion de ingredientes con máximo 700 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.ingredientes?.message}
        </Form.Text>
      </Form.Group>

      {/* pasos */}

      <Form.Group className="mb-3" controlId="formCantidad">
        <Form.Label>Cantidad de Pasos:</Form.Label>
        <Form.Select value={cantidadPasos} onChange={handleCantidadPasosChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Select>
      </Form.Group>

      {Array.from({ length: cantidadPasos }).map((_, index) => (
        <Form.Group key={index} className="mb-3" controlId={`pasos[${index}]`}>
          <Form.Label>Paso {index + 1}:</Form.Label>
          <Form.Control
            type="text"
            placeholder={`Paso ${index + 1}`}
            {...register(`pasos.${index}`, {
              required: "Ingrese una descripción de paso",
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
        </Form.Group>
      ))}
    

      
      {/* <Form.Group className="mb-3 grupoPasos" controlId="formPasos">
        <Form.Label>Pasos:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Pasos línea por línea"
          {...register("pasos", {
            required: "Ingrese los pasos de la receta",
            minLength: {
              value: 10,
              message:
                "Ingrese una descripcion de pasos con mínimo 30 caracteres",
            },
            maxLenght: {
              value: 800,
              message:
                "Ingrese una descripcion de pasos con máximo 700 caracteres",
            },
          })}
        />

        <Form.Text className="text-danger">{errors.pasos?.message}</Form.Text>

      </Form.Group> */}

      <Button
        type="submit"
        className="btnPrincipal ms-auto mt-5"
        variant="warning"
      >
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioRecetas;
