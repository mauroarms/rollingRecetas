import React from "react";
import { Button, Container} from "react-bootstrap";
import "../../css/detalleProducto.css";
import { Link } from "react-router-dom";
import Recetas from "../receta/Recetas";

const Receta = () => {
  const imagen =
    "https://www.grillseeker.com/wp-content/uploads/2022/06/sauced-pork-ribs-on-a-baoking-sheet.jpg";
  const nombre = "Ribs de Cerdo BBQ";
  const descripcion =
  "Nuestras Costillas de Cerdo al Horno son una obra maestra de sabor y textura. Comenzamos con costillas de cerdo de alta calidad, las cuales se marinan en una mezcla de salsa barbacoa casera, miel, mostaza, y una selección de especias que realzan su sabor único. Luego, las horneamos lentamente a baja temperatura para lograr una carne tierna y jugosa, mientras que el glaseado de salsa barbacoa carameliza delicadamente en la superficie, creando una capa irresistible de sabor dulce y ahumado. Cada bocado es una experiencia gastronómica que deleitará tus sentidos y te dejará con ganas de más. Perfectas para compartir o disfrutar como plato principal, nuestras Costillas de Cerdo al Horno son la opción ideal para los amantes de la buena comida y la cocina reconfortante."
  const categoria = "parrilla";
  const ingredientes="1 matambre de res (aproximadamente 1.5-2 kg)\n4 cebollas de verdeo (cebollas de cambray), finamente picadas\n4 dientes de ajo, picados\n1/2 taza de perejil fresco, picado\n1/4 taza de aceite de oliva\n1/4 taza de vinagre de vino blanco\nSal y pimienta al gusto\n1 taza de caldo de carne"
  const pasos = "En un tazón grande, mezcla las cebollas de verdeo picadas, el ajo picado, el perejil picado, el aceite de oliva y el vinagre de vino blanco. Esta mezcla será el marinado para el matambre.\n\nColoca el matambre en una bandeja o recipiente lo suficientemente grande como para contenerlo y vierte la mezcla de marinado sobre la carne, asegurándote de cubrirla completamente. Cubre la bandeja con papel film y deja marinar en el refrigerador durante al menos 2 horas, preferiblemente durante toda la noche, para que los sabores se impregnen bien en la carne.\n\nPasado el tiempo de marinado, retira el matambre del refrigerador y deja que alcance la temperatura ambiente antes de cocinarlo.\n\nPrecalienta tu parrilla o asador a fuego medio-alto. Si no tienes parrilla, también puedes cocinar el matambre en el horno precalentado a 180°C (350°F).\n\nSaca el matambre del marinado y sazona generosamente con sal y pimienta por ambos lados.\n\nColoca el matambre en la parrilla o en una bandeja para hornear, dependiendo del método de cocción que elijas. Cocina el matambre durante unos 15-20 minutos por lado, o hasta que esté cocido a tu gusto y haya desarrollado un bonito color dorado en el exterior.\n\nMientras se cocina el matambre, puedes calentar el caldo de carne en una cacerola pequeña a fuego medio.\n\nUna vez que el matambre esté listo, retíralo del fuego y déjalo reposar durante unos minutos antes de cortarlo en rodajas finas.\n\nSirve el matambre en rodajas, acompañado de la salsa verde que se formó durante la cocción, y si lo deseas, puedes verter un poco de caldo de carne caliente sobre las porciones individuales para añadir más sabor."

  return (
    <>
      <div className="position-relative">
        <div className="backgroundProducto">
          <img src={imagen} alt="imgProducto" />
        </div>

        <div className="contenidoProducto">
          <div className="image-section">
            <img src={imagen} alt="imgProducto" />
          </div>
          <div className="content-section">
            <h6 className="mb-4">{categoria}</h6>
            <h1 className="display-6">{nombre}</h1>

            <div className="mt-4">
              <strong>Descripción:</strong>
              <p>{descripcion}</p>
            </div>

            <div className="btnConteiner">
              <Button
                className="btnPrincipal"
                variant="warning"
                as={Link}
                to="/"
              >
                Volver
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Container className="contPasosIngredientes">
        <article className="w-25">
          <h2 className="mt-4 display-6">Ingredientes:</h2>
          <div class="mt-4 border border-warning rounded">
            <ul className="p-5">
              <li>sfafafsa</li>
              <li>sfafafsa</li>
              <li>sfafafsa</li>
              <li>sfafafsa</li>
              <li>sfafafsa</li>
              <li>sfafafsa</li>
            </ul>
          </div>
        </article>
        <article >
          <h2 className="mt-4 display-6">Pasos:</h2>
          <div className="mt-5">
            <ol className="pt-4">
              <li>sfafafsa</li>
              <li>sfafafsa</li>
              <li>sfafafsa</li>
              <li>sfafafsa</li>
              <li>sfafafsa</li>
              <li>sfafafsa</li>
            </ol>
          </div>
        </article>
      </Container>

      <Container>
        <h1 className="mt-4 display-5">También te podría gustar...</h1>
        <hr />
        <Recetas></Recetas>
      </Container>
    </>
  );
};

export default Receta;
