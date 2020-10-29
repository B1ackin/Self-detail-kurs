import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'UseEffect demo',
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log("Simple Example");

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    },[counter])

    return <div>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>

    </div>
}


export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log("Simple Example");


    useEffect(() => {

        setTimeout(() => {
            document.title = counter.toString();
        }, 1000)
    }, [counter])



    return <div>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>

    </div>
}