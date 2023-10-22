import { BuscaFilmeModel } from "../../models/classico/buscaModel";
import { CategoriasModel } from "../../models/classico/categoriasModel";
import { FilmesModel } from "../../models/classico/filmesModel";
import { ListagemAction } from "../actions/listagemActions";

export interface ListagemState {
  loading: boolean;
  categoria: CategoriasModel[];
  filmes: FilmesModel[];
  filmeEncontrado: FilmesModel;
  modalCategoria: boolean;
  modalFilme: boolean;
}

const initialState = {
  loading: false,
  categoria: [
    {
      id: "Ação",
      descricao: "Ação",
    },
  ],
  filmes: [],
  filmeEncontrado: {} as FilmesModel,
  modalCategoria: false,
  modalFilme: false,
} as ListagemState;

export const ListagemReducer = (state = initialState, action: ListagemAction): ListagemState => {
  switch (action.type) {
    case "SET_LOADING":
      state = { ...state, loading: action.payload };
      break;
    case "ADICIONAR_CATEGORIA":
      state = { ...state, categoria: [...state.categoria, action.payload] };
      break;
    case "REMOVER_CATEGORIA":
      state = { ...state, categoria: state.categoria.filter((categoria) => categoria.id !== action.payload) };
      break;
    case "ADICIONAR_FILME":
      state = { ...state, filmes: [...state.filmes, action.payload] };
      break;
    case "FILME_ENCONTRADO":
      state = { ...state, filmeEncontrado: action.payload, loading: false };
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
