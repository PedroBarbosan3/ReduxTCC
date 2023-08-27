import { createSlice } from "@reduxjs/toolkit";
import { authenticateTokenModel } from "../../models/authenticateTokenModel";
import { authenticate } from "../../services/accountService";
import { toast } from "react-toastify";

interface authenticateState {
  sucess: boolean;
  loading: boolean;
  entity: authenticateTokenModel;
}

const initialState: authenticateState = {
  sucess: false,
  loading: false,
  entity: {} as authenticateTokenModel,
};

export const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.entity = {} as authenticateTokenModel;
    },
  },
  extraReducers: (builder) => {
    var toaster: any = null;
    builder.addCase(authenticate.pending, (state) => {
      state.loading = true;
      toaster = toast.loading("carregando", { position: "bottom-center" });
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.loading = false;
      toast.update(toaster, {
        render: "Login feito com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.loading = false;
      toast.update(toaster, {
        render: action.error.message,
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
    });
  },
});

export const { resetAuth } = authenticateSlice.actions;

export default authenticateSlice.reducer;