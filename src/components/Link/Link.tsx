import classes from "./Link.module.scss"
import {NavLink} from "react-router-dom";

export type Props = {
    text:string,
    link:string,
    state?:number
}

export default function Link ({text,link,state}:Props){
    return (
        <NavLink className={classes.link} to={link} state={state} >{text}</NavLink>
    )
}