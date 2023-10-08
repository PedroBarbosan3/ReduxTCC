import api from "./api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listarCategorias = createAsyncThunk(
  "/listagem/ListarCategorias",
  async () => {
    try {
      const data = await api.get("/listagem/ListarCategorias", {});
      return data.data.data;
    } catch (error: any) {
      throw new Error(error.response.data.Message);
    }
  }
);
