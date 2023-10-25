import { combineReducers } from "@reduxjs/toolkit";
import listagemReducer from "./slices/Lista/listagemSlice";

const rootReducer = combineReducers({
  listagem: listagemReducer,
});

export default rootReducer;
