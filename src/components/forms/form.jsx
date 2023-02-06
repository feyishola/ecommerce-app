import React from "react";

const Form = ({onSubmit,onChange,type,value,name,label})=>{
    return(
        <form onSubmit={onSubmit}>
                <label>{label}:
                    <input type={type} value={value} name={name} onChange={onChange}/>
                </label><br/>
        </form>
    )
}
export default Form;