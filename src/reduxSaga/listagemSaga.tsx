import { call, put, takeEvery } from "redux-saga/effects";
import api from "../util/api";
import { FilmesModel } from "../models/classico/filmesModel";
import { filmeEncontradoFailure, filmeEncontradoSuccess } from "../reduxToolkit/slices/Lista/listagemSlice";

const buscarFilme = async (title: string) => {
  return await api.get("http://www.omdbapi.com/?apikey=ea357f73&t=" + title);
};

function* buscarFilmeFetch(action: any): any {
  try {
    const response = yield call(buscarFilme, action.payload);
    let filmeEcontrado: FilmesModel = {
      id: response.data.Title,
      titulo: response.data.Title,
      imagem: response.data.Poster,
      descricao: response.data.Plot,
      categoria: "",
    };
    yield put(filmeEncontradoSuccess(filmeEcontrado));
  } catch (error) {
    yield put(filmeEncontradoFailure(error));
  }
}

function* buscarFilmeSaga() {
  yield takeEvery("listagem/filmeEncontradoFetch", buscarFilmeFetch);
}

export default buscarFilmeSaga;
