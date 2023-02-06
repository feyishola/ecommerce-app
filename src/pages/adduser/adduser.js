import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './adduser.scss'



const AddUser = ()=>{
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const submit = (e)=>{
        e.preventDefault();
        console.log(user);
        navigate(-1)
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
                <input type={"text"} name={"userName"} value={user.userName} onChange={handler} />

                <div>User Category: </div>
                <input type={"text"} name={"userCategory"} value={user.userCategory} onChange={handler} />

                <div>User Email: </div>
                <input type={"text"} name={"email"} value={user.email} onChange={handler} />

                <div></div>
                <input type={"submit"} value={"create user"} />
            </form>
        </div>
    )
}

export default AddUser;