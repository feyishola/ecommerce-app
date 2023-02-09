import { Button } from "@mui/material";
import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const value = createContext()
export const Counter = ()=>{
    
    const [count, setCount] = useState(1)

    return(
        <value.Provider value={count}>
            <div style={{display:"flex", flexDirection:"row", gap:"45px"}}>
                <Button variant="contained" color="success" onClick={()=>{if(count !==1)setCount(count - 1)}}>-</Button>
                    {count}
                <Button variant="contained" color="success" onClick={()=>{setCount(count+1)}}>+</Button>
            </div>
        </value.Provider>
    )
}