import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { requestApi } from "../../logic/client_api/client";
import './adduser.scss'



const AddUser = ()=>{
    const [user, setUser] = useState({})

    const [result, setResult] = useState()

    const navigate = useNavigate()

    const submit = (e)=>{
        e.preventDefault();
        // console.log(user);

        const token = JSON.parse(localStorage.getItem("token"))

        requestApi('/api/v1/user',"POST",token,user)
        .then(res=>{
            if(res.response == 'ok'){
                alert("User created Successfully")
                navigate(-1)
            }else{
                setResult(res.payload)
            }
        })
        .catch(err=>{
            setResult(err.message)
        })

        
    }
    
    const handler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser(state=>({...state,[name]:value}))
    }
    return(
        <div className="form">
            <form onSubmit={submit}>
                <div>User Name: </div>
                <input type={"text"} name={"userName"} value={user.userName || ""} onChange={handler} />

                <div>User Category: </div>
                <input type={"text"} name={"userCategory"} value={user.userCategory || ""} onChange={handler} />

                <div>User Email: </div>
                <input type={"text"} name={"email"} value={user.email || ""} onChange={handler} />

                <div>Password: </div>
                <input type={"password"} name={"password"} value={user.password || ""} onChange={handler} />

                <div style={{color:'red'}}>{result === undefined? '':result}</div>
                <input type={"submit"} value={"create user"} />
            </form>
        </div>
    )
}

export default AddUser;