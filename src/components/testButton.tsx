import { useState } from "react";
const TestButton = (props: { log: string }) => {
    const [name, setState] = useState('morning');
    const handleClick = () => {
        setState('night');
        console.log(props.log);
    };

    return (
        <div>
            <p>{name}</p>
            <button onClick={handleClick}>{props.log}</button>
        </div>
    );
};
export default TestButton;