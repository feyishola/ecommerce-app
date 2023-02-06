import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addproduct.scss"



const AddProduct = ()=>{
    const[product, setproduct] = useState({})

    const navigate = useNavigate()

    const HandleSubmit = (event)=>{
        event.preventDefault()
        console.log(product);
        navigate(-1)
    }

    const HandleUserDetails = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setproduct(values=>({...values, [name]:value}))
    }

    return(
        <div className="form">
            <form onSubmit={HandleSubmit}>
                    <div>product:</div>
                        <input type={"text"} name={"productName"} value={product.productName} onChange={HandleUserDetails}/><br/>
                    
                    <div>product Category:</div>
                        <input type={"text"} name={"productCategory"} value={product.productCategory} onChange={HandleUserDetails}/><br/>
                    
                    <div>Amount:</div>
                        <input type={"text"} name={"productAmount"} value={product.productAmount} onChange={HandleUserDetails}/><br/>
                    
                    <div>Quantity:</div>
                        <input type={"text"} name={"productQuantity"} value={product.productQuantity} onChange={HandleUserDetails}/><br/>

                    <div>Image:</div>
                        <input type={"text"} name={"productImage"} value={product.productImage} onChange={HandleUserDetails}/><br/>
                    
                    <input type={"submit"} value={"add product"}/>
            </form>
        </div>
    )
}

export default AddProduct;