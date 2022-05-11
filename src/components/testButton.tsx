import { useState } from "react";
const TestButton = (props: { log: string }) => {
    const [name, setState] = useState('morning');
    const [dayOfWeek, setDay] = useState('Monday\'s')
    const handleClick = () => {
        setState('night');
        setDay('Tuesday\'s')
        console.log(props.log);
    };

    return (
        <div>
            <p>{dayOfWeek}</p>
            <p>{name}</p>
            <button onClick={handleClick}>{props.log}</button>
        </div>
    );
};
export default TestButton;
