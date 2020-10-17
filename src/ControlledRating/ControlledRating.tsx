import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
 value: number
    onClick: (value: RatingValueType) => void
}


export function ControlledRating(props:RatingType) {



    return (
        // Проверяем по клику, какое value нам надо. Если Value больше например 1, то сетаем в setRatingValue 2 и загорается
        // 2 звездочки и передаем значение value в компоненту STAR и отрисовываем
        //props.onClick функция которая принимает значения RatingValueType и может быть от 1 до 5.
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
    // по клику на спан, вызываем функцию которая в onClick сетает значение полученого value, затем идет тернарное выражение
    // если props.selected больше например 2, то отрисовать 2 звездочки в теге <b> а если нет, то обычную строчную
    return <span onClick={ () => { props.onClick(props.value) }}> {props.selected ? <b>STAR </b> : "STAR" } </span>



}

export default ControlledRating;