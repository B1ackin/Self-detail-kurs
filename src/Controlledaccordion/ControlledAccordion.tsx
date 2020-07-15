import React from 'react';
import Accordion, {AccordionTitle} from "../Uncontrolledaccordion/Accordion";



export type PropsTitle = {
    titleValue: string
    onClick: (value: boolean) => void
    collapsed: boolean
}



function ControlledAccordion(props: PropsTitle) {



    return (
        <div>
            <ControlledAccordionTitle titleValue={props.titleValue} onClick={ () => { props.onClick(!props.collapsed)}} />
            { !props.collapsed && <ControlledAccordionBody/> }
        </div>
    )
}

type AccordionPropsTitle = {
    titleValue: string
    onClick: () => void
}

export function ControlledAccordionTitle(props: AccordionPropsTitle) {

    return (
        <div>
            <h3 onClick={ () => { props.onClick() }}>{props.titleValue}</h3>
        </div>
    )
}


function ControlledAccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}



export default ControlledAccordion;