import {IAuto,} from "../interfaces/IAuto";
import {ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {axiosCustom} from "../axios/axiosCustom";


export interface IAutoState {
    status:"loading" | "fulfilled" | "",
    items:IAuto[]
}

const initialState:IAutoState = {
    status:"",
    items:[]
}

export const getAuto = createAsyncThunk(
    "team/playerListLoading",
    () =>
         axiosCustom
            .get(`auto`)
            .then((response) => response.data)
            .catch((error) => error)

);

/** Создаем слайс Машины */
export const AutoSlice = createSlice({
    name: 'auto',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getAuto.pending,(state,action)=>{
            state.status = "loading"
        })
        builder.addCase(getAuto.fulfilled,(state,action)=>{
            state.status = "fulfilled"
            state.items = action.payload
        })
    }
})

export default AutoSlice.reducer