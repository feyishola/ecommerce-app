import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../components/button/button";
import { requestApi } from "../../logic/client_api/client";
// import Form from "../../components/forms/form";
import "./login.scss"

const Login = ()=>{

    const navigate = useNavigate()

    const [loginDetails, setLoginDetails] = useState({})

    const [response, setResponse] = useState()

    const HandleSubmit = (e)=>{
        e.preventDefault();
        console.log(loginDetails);
        requestApi('/api/v1/user/login',"POST","",loginDetails)
        .then(res=>{
            console.log(res);
            if(res.response == 'ok'){
                localStorage.setItem("token",JSON.stringify(res.payload.token))

                setTimeout(()=>{

                    navigate('/customer')
                },500)
            }else{
                setResponse(res.payload)
            }

        })
        .catch(err=>{
            setResponse(err.message)
        })
    }

    const HandleFormInput = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setLoginDetails(values=>({...values, [name]:value}))
    }

    return(
        <div>
            <div className="form">
                <form onSubmit={HandleSubmit}>
                    <label>Email:
                        <input type={"email"} value={loginDetails.email} name={"email"} onChange={HandleFormInput} style={{height:"30px"}}/>
                    </label><br/>
                    <label>Password:
                        <input type={"text"} value={loginDetails.password} name={"password"} onChange={HandleFormInput} style={{height:"30px"}}/>
                    </label><br/>
                    <input type={"submit"} value={"submit"} style={{width:"150px", height:"30px", marginLeft:"35%", backgroundColor:"green"}}/>
                    {response?<p style={{color:"red", margin:"2px"}}>{response}</p>:""}
                </form>
                <div style={{marginBottom:"10px"}}/>
                {"Dont have an account? pls register here"}<ButtonComp size={"large"} buttonValue={"Register"} onClick={()=>{navigate('/register')}}/>

            </div>
        </div>
    )
}

export default Login