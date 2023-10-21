import { applyMiddleware, createStore } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
