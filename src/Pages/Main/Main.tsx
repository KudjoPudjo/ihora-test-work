import {Outlet, useLocation, useNavigate, useParams, useSearchParams,} from "react-router-dom";
import {useEffect, useMemo} from "react";
import classes from "./Main.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {getAuto} from "../../features/autoSlice";
import {getModel} from "../../features/modelSlice";
import {getModif} from "../../features/ModifSlice";

export default function Main (){
    const dispatch = useDispatch<AppDispatch>()
    const location = useLocation()
    const navigate = useNavigate()
    const param = useParams()
    const autoId = param.carName
    const modelId = param.model
    const paramId = param.param
    const models = useSelector((state:RootState) => state.model)
    const cars = useSelector((state:RootState) => state.cars)
    const modif = useSelector((state:RootState) => state.modif)
    useEffect(()=>{
        if(location.pathname === ""){
            navigate("/car")
        }
        if(cars.items.length == 0 && cars.status ===""){
            dispatch(getAuto())
        }
        if(models.items.length == 0 && models.status ==="" && modelId){
            dispatch(getModel(+modelId))
        }
        if(modif.items.length == 0 && models.status ==="" && paramId){
            dispatch(getModif(+paramId))
        }

    },[])

    const text = useMemo(()=>{

        let currentCar,currentModel,currentModif
        if(autoId)currentCar = cars.items.find(elem=>elem.id == +autoId)
        if(modelId)currentModel = models.items.find(elem=>elem.id == +modelId)
        if(paramId)currentModif = modif.items.find(elem=>elem.id == +paramId)
        return (
            <span className={classes.title}><span className={classes.title_red}>{currentCar?.name} {currentModel?.name}</span> <span>{currentModif?.name}</span></span>
        )
    },[param,cars,models,modif])

    return (
        <div className={classes.main}>
            <div className={classes.main_header}>
                <h2>Подбор стеклоочестителей {text}</h2>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
