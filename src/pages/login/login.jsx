import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
// import Form from "../../components/forms/form";
import "./login.scss"

const Login = ()=>{

    const navigate = useNavigate()

    const [loginDetails, setLoginDetails] = useState({})

    // const [error, setError] = useState(false)

    const HandleSubmit = (e)=>{
        e.preventDefault();
        if(loginDetails.username == "admin"){

            console.log(loginDetails);
            localStorage.setItem("userdetails",JSON.stringify(loginDetails))
            navigate('/customer')
        }

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
                    <input type={"text"} value={loginDetails.username} name={"username"} onChange={HandleFormInput} />
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