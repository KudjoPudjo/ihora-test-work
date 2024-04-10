import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosCustom} from "../axios/axiosCustom";
import { IModif} from "../interfaces/IAuto";
import {getAuto} from "./autoSlice";

export interface IModifState {
    status:"loading" | "fulfilled",
    items:IModif[]
}

const initialState:IModifState = {
    status:"loading",
    items:[]
}

export const getModif = createAsyncThunk(
    "auto/modifLoading",
    (modif: number) =>
        axiosCustom
            .get(`modif/${modif}`)
            .then((response) => response.data)
            .catch((error) => error)
);

/** Создаем слайс Компаний */
export const ModifSlice = createSlice({
    name: 'modif',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getModif.pending,(state,action)=>{
            state.status = "loading"
        })
        builder.addCase(getModif.fulfilled,(state,action)=>{
            state.status = "fulfilled"
            state.items = action.payload
        })
    }
})
export const {  } = ModifSlice.actions
export default ModifSlice.reducer