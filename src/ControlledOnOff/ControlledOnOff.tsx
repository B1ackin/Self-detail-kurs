import React, {Dispatch, SetStateAction, useState} from 'react';
import {on} from "cluster";
import {RatingValueType} from "../ControlledRating/ControlledRating";

export type OnOffType = boolean

export type ControlledOnOff = {
    onClick: (Dispatch<SetStateAction<boolean>>)
    on: boolean
}


function ControlledOnOff(props: ControlledOnOff) {



    const onStyle = {
        border: "1px solid black",
        height: "20px",
        width: "30px",
        display: "inline-block",
        padding: "6px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        border: "1px solid black",
        height: "20px",
        width: "30px",
        display: "inline-block",
        padding: "6px",
        backgroundColor: props.on ? "white" : "red"

    }
    const indicatorStyle = {
        border: "1px solid black",
        height: "15px",
        width: "15px",
        borderRadius: "15px",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "green" : "red"

    }

    return (
        <div>
            <div style={onStyle} onClick={ () => {props.onClick(!props.on) }}>On</div>
            <div style={offStyle} onClick={ () => {props.onClick(!props.on ) }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )



}


export default ControlledOnOff;