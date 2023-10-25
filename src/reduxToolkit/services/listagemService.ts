import api from "../../util/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

//toolkit
export const buscarFilme = createAsyncThunk("/listagem/BuscarFilme", async (title: string) => {
  try {
    const data = await api.get("http://www.omdbapi.com/?apikey=ea357f73&t=" + title);
    return data.data;
  } catch (error: any) {
    throw new Error(error.response.data.Message);
  }
});
