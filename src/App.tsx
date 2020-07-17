import React, {useState} from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./UncontrolledAccordion/UncontrolledAccordion";
import ControlledRating, {RatingValueType} from "./ControlledRating/ControlledRating";
import ControlledAccordion from "./ControlledAccordion/ControlledAccordion";
import ControlledOnOff from "./ControlledOnOff/ControlledOnOff";
import {UncontrolledRating} from './UncontrolledRating/UncontrolledRating';


function App() {

    let [RatingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)
    let [unOn, setUnOn] = useState<boolean>(false)

    return (
        <div className="App">
            <header className="App-header">
                <UncontrolledOnOff onChange={setUnOn}/> {unOn.toString()}
                <ControlledOnOff onClick={setOn} on={on}/>
                <UncontrolledAccordion titleValue={"Menu-1"}/>
                <UncontrolledAccordion titleValue={"Menu-2"}/>
                <UncontrolledRating value={1}/>
                <ControlledRating value={RatingValue} onClick={setRatingValue}/>
                <ControlledAccordion titleValue={"Menu-2"} onClick={setCollapsed} collapsed={collapsed}/>
                {/*<UncontrolledRating value={2}/>*/}
                {/*<UncontrolledRating value={3}/>*/}
                {/*<UncontrolledRating value={4}/>*/}
                {/*<UncontrolledRating value={5}/>*/}

            </header>
        </div>
    );
}

export default App;
