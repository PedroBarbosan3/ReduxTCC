import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listagemReducer from "./Lista/listagemSlice";

const reducers = combineReducers({
  listagemReducer: listagemReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
