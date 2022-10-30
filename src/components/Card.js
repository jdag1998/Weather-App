import React from "react";
import Spinner from "./Spinner";

export default function Card({loadingData, showData , weather, forecast}) {

    if(loadingData){
        return <Spinner />
    }

    return(
        <div></div>
    )
}