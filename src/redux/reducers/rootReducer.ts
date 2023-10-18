import { combineReducers } from "redux";
import listagem, { ListagemState } from "./listagemReducer";

export interface AllStates {
  listagem: ListagemState;
}

export default combineReducers({
  listagem,
});
