import React, {useState} from 'react';

type OnOffType = {
    onChange: (on: boolean) => void
}


export function UncontrolledOnOff(props: OnOffType) {

    let [UnOn, setUnOn] = useState(false)

    const onStyle = {
        border: "1px solid black",
        height: "20px",
        width: "30px",
        display: "inline-block",
        padding: "6px",
        backgroundColor: UnOn ? "green" : "white"
    }
    const offStyle = {
        border: "1px solid black",
        height: "20px",
        width: "30px",
        display: "inline-block",
        padding: "6px",
        backgroundColor: UnOn ? "white" : "red"

    }
    const indicatorStyle = {
        border: "1px solid black",
        height: "15px",
        width: "15px",
        borderRadius: "15px",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: UnOn ? "green" : "red"

    }

    const OnCliked = () => {
        setUnOn(true)
        props.onChange(true)
    }

    const offCliked = () => {
        setUnOn(false)
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


// export default UncontrolledOnOff;