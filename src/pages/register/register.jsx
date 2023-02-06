import React, { useState } from "react";
import "./register.scss"

const Register = ()=>{
    const[user, setUser] = useState({})

    const HandleSubmit = (event)=>{
        event.preventDefault()
        console.log(user);
    }

    const HandleUserDetails = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser(values=>({...values, [name]:value}))
    }

    return(
        <div className="form">
            <form onSubmit={HandleSubmit}>
                    <div>UserName:</div>
                        <input type={"text"} name={"username"} value={user.username} onChange={HandleUserDetails}/><br/>
                    
                    <div>UserCategory:</div>
                        <input type={"text"} name={"usercategory"} value={user.usercategory} onChange={HandleUserDetails}/><br/>
                    
                    <div>Email:</div>
                        <input type={"text"} name={"email"} value={user.email} onChange={HandleUserDetails}/><br/>
                    
                    <div>Password:</div>
                        <input type={"text"} name={"password"} value={user.password} onChange={HandleUserDetails}/><br/>
                    
                    <input type={"submit"} value={"Register"}/>
            </form>
        </div>
    )
}

export default Register;