import { createSlice } from "@reduxjs/toolkit";

interface listagemState {
  sucess: boolean;
  loading: boolean;
  list: [];
}

const initialState: listagemState = {
  sucess: false,
  loading: false,
  list: [],
};

export const listagemSlice = createSlice({
  name: "listagem",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(authenticate.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(authenticate.fulfilled, (state, action) => {
  //     state.entity = action.payload;
  //     state.loading = false;
  //   });
  //   builder.addCase(authenticate.rejected, (state, action) => {
  //     state.loading = false;
  //   });
  // },
});

export const {} = listagemSlice.actions;

export default listagemSlice.reducer;
