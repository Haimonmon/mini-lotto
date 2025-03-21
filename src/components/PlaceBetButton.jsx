import React from "react";

const PlaceBetButton = (props) =>{
    return <div className={props.className} onClick={props.onClick}>
    <span>{props.value}</span>
    </div>
}

export default PlaceBetButton