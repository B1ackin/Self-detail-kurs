import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ControlledAccordion} from "./ControlledAccordion";




export default {
    title: 'Controlled Accordion',
    component: ControlledAccordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("accordion mode change event fired");

export const CollapsedMode = () => <ControlledAccordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/> ;
export const UncollapsedMode = () => <ControlledAccordion titleValue={"Menu"} collapsed={false} onChange={callback} items={
    [{title:"Dimych", value: 1},
     {title:"Valera",value: 2},
     {title:"Kirill",value: 3},
     {title:"Pasha", value: 4}]} onClick={onClickCallback}/> ;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <ControlledAccordion titleValue={"Menu"} collapsed={value} onChange={() => setValue(!value)} items={
        [{title:"Dimych", value: 1},
         {title:"Valera", value: 2},
         {title:"Kirill", value: 3},
         {title:"Pasha", value: 4}]} onClick={onClickCallback}/> };
