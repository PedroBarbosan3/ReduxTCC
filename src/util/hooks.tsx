import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "../reduxToolkit/store";

export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
