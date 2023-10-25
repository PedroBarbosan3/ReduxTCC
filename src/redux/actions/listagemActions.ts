import { CategoriasModel } from "../../models/classico/categoriasModel";
import { FilmesModel } from "../../models/classico/filmesModel";
import api from "../../util/api";

export type ListagemAction = SetLoading | AdicionarCategoria | RemoverCategoria | AdicionarFilme | FilmeEcontrado | SetModalCategoria | SetModalFilme;

export interface SetLoading {
  type: "SET_LOADING";
  payload: boolean;
}

export interface AdicionarCategoria {
  type: "ADICIONAR_CATEGORIA";
  payload: CategoriasModel;
}

export interface RemoverCategoria {
  type: "REMOVER_CATEGORIA";
  payload: string;
}

export interface AdicionarFilme {
  type: "ADICIONAR_FILME";
  payload: FilmesModel;
}

export interface FilmeEcontrado {
  type: "FILME_ENCONTRADO";
  payload: FilmesModel;
}

export interface SetModalCategoria {
  type: "SET_MODAL_CATEGORIA";
  payload: boolean;
}

export interface SetModalFilme {
  type: "SET_MODAL_FILME";
  payload: boolean;
}

export const buscarFilme =
  (title: string): any =>
  async (dispatch: any) => {
    await dispatch({ type: "SET_LOADING", payload: true });
    const data = await api.get("http://www.omdbapi.com/?apikey=ea357f73&t=" + title);
    let filmeEcontrado: FilmesModel = {
      id: data.data.Title,
      titulo: data.data.Title,
      imagem: data.data.Poster,
      descricao: data.data.Plot,
      categoria: "",
    };
    await dispatch({ type: "SET_LOADING", payload: false });
    await dispatch({ type: "FILME_ENCONTRADO", payload: filmeEcontrado });
    return data.data;
  };


  