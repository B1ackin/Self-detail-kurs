import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import ControlledOnOff from "./ControlledOnOff";




export default {
    title: 'Controlled OnOff',
    component: ControlledOnOff,
};

const callback = action("on or off clicked");

export const OnMode = () => <ControlledOnOff on={true} onClick={callback}/> ;
export const OffMode = () => <ControlledOnOff on={false} onClick={callback}/> ;

export const ModeChanging = () => {

    const [controlledOnOff, setControlledOnOff] = useState<boolean>(true);
    return <ControlledOnOff  on={controlledOnOff} onClick={setControlledOnOff}/> ;
}
