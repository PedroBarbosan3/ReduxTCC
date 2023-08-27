import { createSlice } from "@reduxjs/toolkit";

interface baseState {
  sucess: boolean;
  loading: boolean;
  message: any;
  entity: any;
  list: any;
}

const initialState: baseState = {
  sucess: false,
  loading: false,
  message: "",
  entity: {} as any,
  list: []
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(service.pending, (state) => {
    // });
    // builder.addCase(service.fulfilled, (state, action) => {
    // });
    // builder.addCase(service.rejected, (state, action) => {
    // });
  },
});

export const {} = baseSlice.actions;

export default baseSlice.reducer;