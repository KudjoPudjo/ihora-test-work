import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosCustom} from "../axios/axiosCustom";
import { IModel} from "../interfaces/IAuto";


export interface IModelState {
    status:"loading" | "fulfilled" | "",
    items:IModel[]
}

const initialState:IModelState = {
    status:"",
    items:[]
}

export const getModel = createAsyncThunk(
    "auto/modelLoading",
    (model: number) =>
        axiosCustom
            .get(`model/${model}`)
            .then((response) => response.data)
            .catch((error) => error)
);

/** Создаем слайс Модели */
export const ModelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getModel.pending,(state,action)=>{
            state.status = "loading"
        })
        builder.addCase(getModel.fulfilled,(state,action)=>{
            state.status = "fulfilled"
            state.items = action.payload
        })
    }
})
export const {  } = ModelSlice.actions
export default ModelSlice.reducer