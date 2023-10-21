import { combineReducers } from "redux";
import { ListagemReducer } from "./listagemReducer";

export default combineReducers({
  listagem: ListagemReducer,
});
