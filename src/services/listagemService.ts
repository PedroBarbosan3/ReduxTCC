import api from "./api";
import { createAsyncThunk } from "@reduxjs/toolkit";

//padrão
// export const getBuscarFilme = (title: string): any => {
//   return api.get("http://www.omdbapi.com/?apikey=ea357f73&t=" + title).then((response) => {
//     var result = response;
//     return result;
//   });
// };

export const getBuscarFilme = async (title: string) => {
  return api
    .get("http://www.omdbapi.com/?apikey=ea357f73&t=" + title)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.error("Error fetching movie:", error);
    });
};

//toolkit
export const buscarFilme = createAsyncThunk("/listagem/BuscarFilme", async (title: string) => {
  try {
    const data = await api.get("http://www.omdbapi.com/?apikey=ea357f73&t=" + title);
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.Message);
  }
});
