/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useState } from "react";

const User = (props) =>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setCount(1);
    },[])
    console.log("FunctionProps: ", props.surname.middleName);
    return (
        <div className="user_card">
            <h2>Functional Count: {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase</button>
            <h2>Name: Askhay {props.surname.middleName} {props.surname.lastName}</h2>
            <h3>Location: Dehradun</h3>
        </div>
    )
}

export default User;