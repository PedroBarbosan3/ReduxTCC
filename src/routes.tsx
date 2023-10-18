import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainTemplate from "./components/templates/main/mainTemplate";
import ListagemView from "./views/Lista";
import DemonstraçaoEstado from "./demonstrações/estado";

//Substituir o MainTemplate nas rotas que forem obrigatórias o login, pelo PrivateRoute
// const PrivateRouteTemplateLogin = ({ children }: any) => {
//   const authenticateState = useAppSelector((state) => state.authenticate);
//   return authenticateState.sucess ? (
//     <MainTemplate>{children}</MainTemplate>
//   ) : (
//     <Navigate to="/" />
//   );
// };

const RouteComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <MainTemplate>
            <ListagemView />
          </MainTemplate>
        }
      />
      <Route
        path="/demonstracao/estado"
        element={
          <MainTemplate>
            <DemonstraçaoEstado />
          </MainTemplate>
        }
      />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  </BrowserRouter>
);

export default RouteComponent;
