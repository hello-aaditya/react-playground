import { useState } from "react";

export default function Temperature() {
    const [temp, setTemp] = useState(25);
    return (
        <>
            <p>Current Temperature: {temp}°C</p>
            <button onClick={()=>setTemp(temp+1)}>Increase</button>
            <button 
                onClick={()=> {
                    if(temp>15) {
                        setTemp(temp-1);
                    }
                }}
            >Decrease</button>
            <button onClick={()=>setTemp(25)}>Reset</button>
        </>
    )
}