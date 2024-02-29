import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (respuesta) => {
    console.log(respuesta);
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
              message: "Ingrese una descripcion amplia con mínimo 30 caracteres",
            },
            maxLenght: {
              value: 700,
              message: "Ingrese una descripcion amplia con máximo 700 caracteres",
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
              message: "Ingrese una descripcion breve con mínimo 10 caracteres"
            },
            max: {
              value: 150,
              message: "Ingrese una descripcion breve con mínimo 150 caracteres"
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcionAmplia?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCategoria">
        <Form.Label>Categoria:</Form.Label>
        <Form.Select
          {...register("categoria", {
            required: "Seleccione una Categoría"
          })}
        >
          <option value="">Seleccione una Opción</option>
          <option value="parrilla">Parrilla</option>
          <option value="vegano">Vegano</option>
          <option value="restaurant">Restautant</option>
          <option value="rapido">Rapido</option>
          <option value="batidos">Batidos</option>
        </Form.Select>
      </Form.Group>

{/* ingredientes */}
      <Form.Group className="mb-3" controlId="formIngredientes">
        <Form.Label>Ingredientes:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Ingredientes línea por línea"
          {...register("ingredientes", {
            required: "Ingrese los ingredientes de la receta",
            minLength: {
              value: 10,
              message: "Ingrese una descripcion de pasos con mínimo 10 caracteres",
            },
            maxLenght: {
              value: 800,
              message: "Ingrese una descripcion de pasos con máximo 700 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.ingredientes?.message}
        </Form.Text>
      </Form.Group>

{/* pasos */}
      <Form.Group className="mb-3" controlId="formPasos">
        <Form.Label>Pasos:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Pasos línea por línea"
          {...register("pasos", {
            required: "Ingrese los pasos de la receta",
            minLength: {
              value: 10,
              message: "Ingrese una descripcion de pasos con mínimo 30 caracteres",
            },
            maxLenght: {
              value: 800,
              message: "Ingrese una descripcion de pasos con máximo 700 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.pasos?.message}
        </Form.Text>
      </Form.Group>


      
      <Button
        type="submit"
        className="btnPrincipal ms-auto mt-5"
        variant="success"
      >
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioProducto;
