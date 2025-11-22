import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>Count: {count}</p>
            <button id="btn1" onClick={()=> setCount(count+1)}>Increment</button>
            <button id="btn2" onClick={()=> setCount(count-1)}>Decrement</button>
            <button id="btn3" onClick={()=> setCount(0)}>Reset</button>
        </>
    )
}