import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestApi } from "../../logic/client_api/client";
import "./register.scss"

const Register = ()=>{

    const[user, setUser] = useState({})

    const[response, setResponse] = useState()

    const navigate = useNavigate()

    const HandleSubmit = (event)=>{
        event.preventDefault()
        console.log(user);

        requestApi("/api/v1/user","POST",user)
        .then(res=>{
            console.log('response from the backend', res);
            if(res.response === 'false'){
                setResponse(res.payload)
            }else{
                navigate('/')
            }
        })
        .catch(err=>{
            console.log('error from the backend', err.message);
        })

        
    }

    const HandleUserDetails = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser(values=>({...values, [name]:value}))
    }

    // useEffect(()=>{
       
    // },[HandleUserDetails])

    return(
        <div className="form">
            <form onSubmit={HandleSubmit}>
                    <div>UserName:</div>
                        <input type={"text"} name={"userName"} value={user.userName} onChange={HandleUserDetails}/><br/>
                            
                    <div>UserCategory:</div>
                        <input type={"text"} name={"userCategory"} value={user.userCategory} onChange={HandleUserDetails}/><br/>
                    
                    <div>Email:</div>
                        <input type={"text"} name={"email"} value={user.email} onChange={HandleUserDetails}/><br/>
                    
                    <div>Password:</div>
                        <input type={"password"} name={"password"} value={user.password} onChange={HandleUserDetails}/><br/>
                    
                    <input type={"submit"} value={"Register"}/>
                    {response != undefined? <p style={{color:"red", margin:'2px'}}>{response}</p>:""}
            </form>
        </div>
    )
}

export default Register;