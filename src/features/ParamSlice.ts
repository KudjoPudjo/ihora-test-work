import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosCustom} from "../axios/axiosCustom";
import {IParam} from "../interfaces/IAuto";
import {getAuto} from "./autoSlice";

export interface IParamState {
    status:"loading" | "fulfilled" | "",
    items:IParam[]
}

const initialState:IParamState = {
    status:"",
    items:[]
}

export const getParam = createAsyncThunk(
    "auto/paramLoading",
    (param: number) =>
        axiosCustom
            .get(`param/${param}`)
            .then((response) => response.data)
            .catch((error) => error)
);

/** Создаем слайс Компаний */
export const ParamSlice = createSlice({
    name: 'param',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getParam.pending,(state,action)=>{
            state.status = "loading"
        })
        builder.addCase(getParam.fulfilled,(state,action)=>{
            state.status = "fulfilled"
            state.items = action.payload
        })
        builder.addCase(getParam.rejected,(state,action)=>{
            state.status = ""
        })
    }
})
export const {  } = ParamSlice.actions
export default ParamSlice.reducer