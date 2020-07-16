import React, {useState} from 'react';
import OnOff from "./OnOff/OnOff";
import Accordion from "./Uncontrolledaccordion/Accordion";
import Rating from "./Rating/Rating";
import ContolledRating, {RatingValueType} from "./ControlledRating/ControlledRating";
import ControlledAccordion from "./Controlledaccordion/ControlledAccordion";
import ControlledOnOff from "./ControlledOnOff/ControlledOnOff";

function App() {

    let [RatintValue, setRatintValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)

    return (
        <div className="App">
            <header className="App-header">
                <OnOff onChange={setOn}/> {on.toString()}
                <ControlledOnOff onClick={setOn} on={on}/>
                <Accordion titleValue={"Menu-1"}/>
                <Accordion titleValue={"Menu-2"}/>
                <Rating value={1}/>
                <ContolledRating value={RatintValue} onClick={setRatintValue}/>
                <ControlledAccordion titleValue={"Menu-2"} onClick={setCollapsed} collapsed={collapsed}/>
                {/*<Rating value={2}/>*/}
                {/*<Rating value={3}/>*/}
                {/*<Rating value={4}/>*/}
                {/*<Rating value={5}/>*/}

            </header>
        </div>
    );
}

export default App;
