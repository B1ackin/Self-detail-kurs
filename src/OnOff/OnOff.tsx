import React, {useState} from 'react';

type OnOffType = {
    onChange: (on: boolean) => void
}


function OnOff(props: OnOffType) {

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

    const OnCliked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offCliked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={ OnCliked }>On</div>
            <div style={offStyle} onClick={ offCliked }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )



}


export default OnOff;