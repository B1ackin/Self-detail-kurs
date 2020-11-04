import React, {useEffect, useState} from 'react';

type PropsType = {

}




export const Clock: React.FC<PropsType> = (props) => {
    const [date, setData] = useState(new Date())


    useEffect(() => {
        const intervalID = setInterval(() => {
            setData(new Date())
        }, 1000);

        return  () => {
            clearInterval(intervalID)
        }

    },[])

    const get2digitString = (num: number) => num < 10 ? "0" + num : num


    return <div>
        <span>{get2digitString(date.getHours())}</span>
        :
        <span>{get2digitString(date.getMinutes())}</span>
        :
        <span>{get2digitString(date.getSeconds())}</span>
    </div>
}