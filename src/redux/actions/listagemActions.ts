import { BuscaFilmeModel } from "../../models/classico/buscaModel";
import { CategoriasModel } from "../../models/classico/categoriasModel";
import { FilmesModel } from "../../models/classico/filmesModel";
import api from "../../services/api";

export type ListagemAction = AdicionarCategoria | RemoverCategoria | AdicionarFilme | SetModalCategoria | SetModalFilme;

//ação para adicionar nova categoria na lista
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

export interface SetModalCategoria {
  type: "SET_MODAL_CATEGORIA";
  payload: boolean;
}

export interface SetModalFilme {
  type: "SET_MODAL_FILME";
  payload: boolean;
}
