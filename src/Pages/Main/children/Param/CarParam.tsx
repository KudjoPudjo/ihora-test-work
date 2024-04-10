import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store/store";
import {useEffect} from "react";
import Loader from "../../../../components/loader/Loader";
import Link from "../../../../components/Link/Link";
import {getParam} from "../../../../features/ParamSlice";
import classes from "./CarParam.module.scss";

export default function CarParam (){
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const param = useSelector((state:RootState) => state.param)

    useEffect(()=>{
        if(params.param){
            dispatch(getParam(+params.param))
        }
    },[])
    console.log(param.items)
    return (<div className={classes.param}>
        {param.status == "loading"?<Loader></Loader>:(<div className={classes.wrap}>{param.items.map(elem => (
            <>
                <div className={classes.param_text}>Длина щетки со стороны водителя (см) - {elem.length1}</div>
                <div className={classes.param_text}>Длина щетки со стороны пассажира (см) - {elem.length2}</div>
                {elem.length3?<div className={classes.param_text}>Длина задней щетки (см) - {elem.length3}</div>:""}
                <div className={classes.param_text}>Тип крепления - {elem.fasten}</div>
            </>
        ))}</div>)}
    </div>)
}