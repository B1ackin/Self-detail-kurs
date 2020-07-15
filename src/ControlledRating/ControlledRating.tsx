import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
 value: number
    onClick: (value: RatingValueType) => void
}


export function ContolledRating(props:RatingType) {

    // let[value, setValue] = useState(0)

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {

    return <span onClick={ () => { props.onClick(props.value) }}> {props.selected ? <b>STAR </b> : "STAR" } </span>



}

export default ContolledRating;