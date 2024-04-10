import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store/store";
import {useEffect} from "react";
import {getAuto} from "../../../../features/autoSlice";
import Loader from "../../../../components/loader/Loader";
import Link from "../../../../components/Link/Link";
import classes from "./Car.module.scss"

export default function Car (){
    const dispatch = useDispatch<AppDispatch>()
    const cars = useSelector((state:RootState) => state.cars)

    useEffect(()=>{
        dispatch(getAuto())
    },[])

    return (
        <div className={classes.car}>
            {cars.status == "loading"?<Loader></Loader>:(<div className={classes.wrap}>{cars.items.map(elem => (
                <Link text={elem.name} link={`/car/${elem.id}`} state={elem.id}></Link>
            ))}</div>)}
        </div>
    )
}