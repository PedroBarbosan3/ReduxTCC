import { createSlice } from "@reduxjs/toolkit";
import { buscarFilme } from "../../services/listagemService";
import { CategoriasModel } from "../../models/classico/categoriasModel";
import { FilmesModel } from "../../models/classico/filmesModel";

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

export const listagemSlice = createSlice({
  name: "listagem",
  initialState,
  reducers: {
    adicionarCategoria: (state, action) => {
      state.categoria = [...state.categoria, action.payload];
    },
    removerCategoria: (state, action) => {
      state.categoria = state.categoria.filter((categoria) => categoria.id !== action.payload);
    },
    adicionarFilme: (state, action) => {
      state.filmes = [...state.filmes, action.payload];
    },
    setModalCategoria: (state, action) => {
      state.modalCategoria = action.payload;
    },
    setModalFilme: (state, action) => {
      state.modalFilme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buscarFilme.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(buscarFilme.fulfilled, (state, action) => {
      state.filmeEncontrado = {
        id: action.payload.Title,
        descricao: action.payload.Plot,
        imagem: action.payload.Poster,
        titulo: action.payload.Title,
        categoria: "",
      };
      state.loading = false;
    });
    builder.addCase(buscarFilme.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { adicionarCategoria, removerCategoria, adicionarFilme, setModalCategoria, setModalFilme } = listagemSlice.actions;

export default listagemSlice.reducer;
