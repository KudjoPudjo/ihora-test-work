import {configureStore} from "@reduxjs/toolkit";
import AutoReducer from "../features/autoSlice";
import ModelReducer from "../features/modelSlice";
import ModifReducer from "../features/ModifSlice";
import ParamReducer from "../features/ParamSlice";

/** Хранилище приложения */
export const store = configureStore({
    reducer:{
        cars:AutoReducer,
        model:ModelReducer,
        modif:ModifReducer,
        param:ParamReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch