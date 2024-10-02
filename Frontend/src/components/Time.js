import { useState } from "react";

const Time = () => {
    let time = new Date().toLocaleTimeString()
    let day = new Date().toDateString()


    let [ctime, setTime] = useState(time)
    let [cday, setDay] = useState(day)


    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time);

        day = new Date().toDateString()
        setDay(day)
    }

    setInterval(updateTime)
    setInterval(updateTime)
    return ( 
        <div className="time">
            <h4>{ ctime } - { cday }</h4>
        </div>
    );
}

export default Time;