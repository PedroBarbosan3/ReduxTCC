import { all, fork } from "redux-saga/effects";
import buscarFilmeSaga from "./listagemSaga";

export function* rootSaga() {
  yield all([fork(buscarFilmeSaga)]);
}
