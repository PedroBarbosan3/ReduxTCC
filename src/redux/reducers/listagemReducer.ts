import { ListagemActionTypes } from "../actions/listagemActions";

export interface ListagemState {
  loading: boolean;
  list: any[];
}

const initialState = {
  loading: false,
  list: [],
} as ListagemState;

export default function ListagemReducer(
  state: ListagemState = initialState,
  action: any
) {
  switch (action.type) {
    case ListagemActionTypes.LOADING:
      state = { ...state, loading: action.payload };
      break;
    case ListagemActionTypes.GET_LIST:
      state = { ...state, list: action.payload };
      break;
    default:
      break;
  }
  return state;
}
