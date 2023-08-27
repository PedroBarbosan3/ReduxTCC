import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

import authenticateReducer from "./account/authenticateSlice";
import configuracoesReducer from "./configuracoesSlice";

const authenticateConfig = {
  key: "authenticate",
  storage: storageSession,
  blacklist: ["loading"],
};

const authenticatePersistedReducer = persistReducer(
  authenticateConfig,
  authenticateReducer
);

const reducers = combineReducers({
  authenticate: authenticatePersistedReducer,
  configuracoes: configuracoesReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
