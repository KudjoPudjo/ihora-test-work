import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store/store";
import {useEffect} from "react";
import classes from "./CarModif.module.scss";
import Loader from "../../../../components/loader/Loader";
import Link from "../../../../components/Link/Link";
import {getModif} from "../../../../features/ModifSlice";


export default function CarModif (){
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const modif = useSelector((state:RootState) => state.modif)

    useEffect(()=>{
        if(params.model){
            dispatch(getModif(+params.model))
        }
    },[])

    return (<div className={classes.modif}>
        {modif.status == "loading"?<Loader></Loader>:(<div className={classes.wrap}>{modif.items.map((elem) => (
            <Link text={elem.name} link={`${elem.id}`} state={elem.id}></Link>
        ))}</div>)}
    </div>)
}