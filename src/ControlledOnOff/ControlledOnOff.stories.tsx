import React, {useState} from 'react';
// import ControlledRating, {RatingValueType} from "./ControlledRating";
import ControlledOnOff from "./ControlledOnOff";



export default {
    title: 'Controlled OnOff',
    component: ControlledOnOff,
};

export const OnMode = () => <ControlledOnOff on={true} onClick={x=>x}/> ;
export const OffMode = () => <ControlledOnOff on={false} onClick={x=>x}/> ;

export const ModeChanging = () => {

    const [controlledOnOff, setControlledOnOff] = useState<boolean>(false)
    return <ControlledOnOff  on={controlledOnOff} onClick={setControlledOnOff}/> ;
}
