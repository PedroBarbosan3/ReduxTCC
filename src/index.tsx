import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import { store } from "./reduxToolkit/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
