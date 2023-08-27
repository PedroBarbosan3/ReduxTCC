import { createSlice } from "@reduxjs/toolkit";

interface baseState {
  menu: boolean;
}

const initialState: baseState = {
  menu: false,
};

export const baseSlice = createSlice({
  name: "configuracoes",
  initialState,
  reducers: {
    changeMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { changeMenu } = baseSlice.actions;

export default baseSlice.reducer;
