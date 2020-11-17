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
        }, 1000);
    }, [])



    return <div>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>

    </div>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("Reset Effect Example");


    useEffect(() => {

        console.log("Effect" + counter)

        return () => {
            console.log(" RESET")
        }

    }, [counter])

    const increase = () => {setCounter(counter + 1)}

    return <div>
        Hello, {counter}
        <button onClick={increase}>+</button>
    </div>
}



export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log("Simple Example");


    useEffect(() => {

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000);
    }, [])



    return <div>
        Hello, counter -  {counter} fake - {fake}

    </div>
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('');

    console.log("Reset Effect Example" + text);


    useEffect(() => {

        window.addEventListener('Key', (e) => {
            console.log(e)
            setText(text + e)

        })

    }, [])


    return <div>
        Typed text: {text}
    </div>
}
