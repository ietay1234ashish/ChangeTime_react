import React, { useState } from "react";

const App = () =>{
    let newTime = new Date().toLocaleTimeString();
    const[ctime, setctime] = useState(newTime);
    let hello = () =>{
        newTime = new Date().toLocaleTimeString();
        setctime(newTime);
    }


    return(
        <>
        <h1>{ctime}</h1>
        <button onClick={hello}>Click to me </button>
        </>
    )
        
   
}
export default App;