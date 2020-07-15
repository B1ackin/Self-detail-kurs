import React, {useState} from 'react';

export type PropsTitle = {
    titleValue: string
}



function Accordion(props: PropsTitle) {

    let[collapsed, setCollapsed] = useState(true)


    return (
        <div>
            <AccordionTitle titleValue={props.titleValue} onClick={ () => { setCollapsed(!collapsed)}} />
            { !collapsed && <AccordionBody/> }
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



export default Accordion;