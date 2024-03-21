import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import Footer from "./components/common/Footer";
import BarraNavegacion from "./components/common/BarraNavegacion";

import Index from "./components/pages/Index";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import DetalleRecetas from "./components/pages/DetalleReceta";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioRecetas from "./components/admin/FormularioRecetas";

function App() {
  return (
    //Administrador de rutas.. contiene todas las rutas del programa

    <BrowserRouter>
      <BarraNavegacion />
      <section className="contenidoPrincipal">
        <Routes>
          <Route exact path="/" element={<Index />}></Route>

          <Route exact path="/admin" element={<Administrador />}></Route>

          <Route
            exact
            path="/receta/:idReceta"
            element={<DetalleRecetas />}
          ></Route>

          <Route
            exact
            path="/admin/agregar"
            element={<FormularioRecetas editar={false} />}
          ></Route>

          {/* //www.rollingCoffe.com/admin */}
          <Route
            exact
            path="/admin/editar/:idReceta"
            element={<FormularioRecetas editar={true}></FormularioRecetas>}
          ></Route>

          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
