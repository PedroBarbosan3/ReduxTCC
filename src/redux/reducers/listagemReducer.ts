import { BuscaFilmeModel } from "../../models/classico/buscaModel";
import { CategoriasModel } from "../../models/classico/categoriasModel";
import { FilmesModel } from "../../models/classico/filmesModel";
import { ListagemAction } from "../actions/listagemActions";

export interface ListagemState {
  categoria: CategoriasModel[];
  filmes: FilmesModel[];
  modalCategoria: boolean;
  modalFilme: boolean;
}

const initialState = {
  categoria: [
    {
      id: "Ação",
      descricao: "Ação",
    },
  ],
  filmes: [],
  modalCategoria: false,
  modalFilme: false,
} as ListagemState;

export const ListagemReducer = (state = initialState, action: ListagemAction): ListagemState => {
  switch (action.type) {
    case "ADICIONAR_CATEGORIA":
      state = { ...state, categoria: [...state.categoria, action.payload] };
      break;
    case "REMOVER_CATEGORIA":
      state = { ...state, categoria: state.categoria.filter((categoria) => categoria.id !== action.payload) };
      break;
    case "ADICIONAR_FILME":
      state = { ...state, filmes: [...state.filmes, action.payload] };
      break;
    case "SET_MODAL_CATEGORIA":
      state = { ...state, modalCategoria: action.payload };
      break;
    case "SET_MODAL_FILME":
      state = { ...state, modalFilme: action.payload };
      break;
    default:
      break;
  }
  return state;
};
