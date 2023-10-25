import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../reduxSaga/rootSaga";

//thunk
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware: any) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

//saga
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export type AppDispatch = typeof store.dispatch;
