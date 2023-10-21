import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainTemplate from "./components/templates/main/mainTemplate";
import DemonstracaoEstado from "./demonstracoes/estado";
import ListaToolkit from "./views/ListaToolkit";
import ListaClassica from "./views/Lista";

const RouteComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <MainTemplate>
            <ListaClassica />
          </MainTemplate>
        }
      />
      <Route
        path="/toolkit"
        element={
          <MainTemplate>
            <ListaToolkit />
          </MainTemplate>
        }
      />
      <Route
        path="/demonstracao/estado"
        element={
          <MainTemplate>
            <DemonstracaoEstado />
          </MainTemplate>
        }
      />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  </BrowserRouter>
);

export default RouteComponent;
