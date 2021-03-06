import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export type PropsTitle = {
    titleValue: string
}


export function UncontrolledAccordion(props: PropsTitle) {

    //let[collapsed, setCollapsed] = useState(true)
    let[state, dispatch] = useReducer(reducer, {collapsed:false})


    return (
        <div>
            {/*<AccordionTitle titleValue={props.titleValue} onClick={ () => { setCollapsed(!collapsed)}} />*/}
            <AccordionTitle titleValue={props.titleValue} onClick={ () => { dispatch({type: TOGGLE_COLLAPSED})}} />
            { !state.collapsed && <AccordionBody/> }
        </div>
    )
}

type AccordionPropsTitle = {
    titleValue: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionPropsTitle) {

    return (
        <div>
            <h3 onClick={ () => { props.onClick() }}>{props.titleValue}</h3>
        </div>
    )
}


function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}



export default UncontrolledAccordion;