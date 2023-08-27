import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import MainTemplate from "./components/templates/main/mainTemplate";
import { useAppSelector } from "./util/assets/hooks";
import BaseView from "./views/baseView";
import BaseViewSecond from "./views/baseViewSecond";
import Login from "./views/login";

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
      <Route path="/" element={<Login />} />
      <Route
        path="/base"
        element={
          <MainTemplate>
            <BaseView />
          </MainTemplate>
        }
      />
       <Route
        path="/baseSecond"
        element={
          <MainTemplate>
            <BaseViewSecond />
          </MainTemplate>
        }
      />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  </BrowserRouter>
);

export default RouteComponent;
