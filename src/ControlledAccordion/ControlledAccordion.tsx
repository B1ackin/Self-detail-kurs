import React from 'react';
import UncontrolledAccordion, {AccordionTitle} from "../UncontrolledAccordion/UncontrolledAccordion";

type ItemType = {
    title: string
    value: any
}

export type PropsTitle = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value:any) => void
}


export function ControlledAccordion(props: PropsTitle) {
    return (
        <div>
            <ControlledAccordionTitle titleValue={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <ControlledAccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionPropsTitle = {
    titleValue: string
    onChange: () => void
}

export function ControlledAccordionTitle(props: AccordionPropsTitle) {

    return (
        <div>
            <h3 onClick={(e) => props.onChange()}>{props.titleValue}</h3>
        </div>
    )
}

export type ControlledAccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any) => void
}

function ControlledAccordionBody(props: ControlledAccordionBodyPropsType) {

    return (
        <ul>
            {props.items.map( (i,index) => <li onClick={ () => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}


