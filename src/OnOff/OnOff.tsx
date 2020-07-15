import React, {useState} from 'react';

function OnOff() {

    let [on, setOn] = useState(false)

    const onStyle = {
        border: "1px solid black",
        height: "20px",
        width: "30px",
        display: "inline-block",
        padding: "6px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        border: "1px solid black",
        height: "20px",
        width: "30px",
        display: "inline-block",
        padding: "6px",
        backgroundColor: on ? "white" : "red"

    }
    const indicatorStyle = {
        border: "1px solid black",
        height: "15px",
        width: "15px",
        borderRadius: "15px",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"

    }

    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true) }}>On</div>
            <div style={offStyle} onClick={ () => {setOn(false) }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )



}


export default OnOff;