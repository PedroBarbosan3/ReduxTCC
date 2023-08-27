import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticateModel } from "../models/authenticateModel";

import api from "./api";

export const authenticate = createAsyncThunk(
    '/Account/login',
    async (auth: authenticateModel) => {
        try{
            const data = await api.post("/Account/login", {
                email: auth.email,
                password: auth.password,
                clientId: "UniWebApp",
                grantType: "password",
                refreshToken: ''
            })
            return data.data.data
        }catch(error: any){
            throw new Error(error.response.data.Message)
        }
    }
)


