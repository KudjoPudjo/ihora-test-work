import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store/store";
import {useEffect} from "react";
import {getModel} from "../../../../features/modelSlice";
import { useParams} from "react-router-dom";
import Loader from "../../../../components/loader/Loader";
import classes from "./Model.module.scss";
import Link from "../../../../components/Link/Link";


export default function CarModel (){
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const models = useSelector((state:RootState) => state.model)

    useEffect(()=>{
        if(params.carName){
            dispatch(getModel(+params.carName))
        }
    },[])

    return (<div className={classes.model}>
        {models.status == "loading"?<Loader></Loader>:(<div className={classes.wrap}>{models.items.map(elem => (
            <Link text={elem.name} link={`${elem.id}`} state={elem.id}></Link>
        ))}</div>)}
    </div>)
}