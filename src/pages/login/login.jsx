import React, { useState } from "react"; 
// import Form from "../../components/forms/form";
import "./login.scss"

const Login = ()=>{

    const [loginDetails, setLoginDetails] = useState({})

    const HandleSubmit = (e)=>{
        e.preventDefault();
        console.log(loginDetails);

    }

    const HandleFormInput = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setLoginDetails(values=>({...values, [name]:value}))
    }

    return(
        <div className="form">
            <form onSubmit={HandleSubmit}>
                <label>Username:
                    <input type={"text"} value={loginDetails.username} name={"username"} onChange={HandleFormInput}/>
                </label><br/>
                <label>Password:
                    <input type={"text"} value={loginDetails.password} name={"password"} onChange={HandleFormInput}/>
                </label><br/>
                <input type={"submit"} value={"submit"}/>
            </form>
            
        </div>
    )
}

export default Login