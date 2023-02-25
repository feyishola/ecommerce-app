import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Counter} from "../../components/counter/counter";
import MenuItem from "../../components/menu-item/menu-item.component";

const ItemDetail = ()=>{
    const location = useLocation()
    const [params] = useSearchParams();
    const [quantity,setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0)

    const navigate = useNavigate()
    // const countValue = useContext(value)

    // const id = params.get('id');

    const {item} = location.state || {};

    const [product, setProduct] = useState(item);

    // const [state, setState] = useState(cartState)

    const [cartState, setCartState] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
    

    // const updateQuantity=(quantity)=>{
    //     setQuantity(quantity);
    // }

    
    // useEffect(()=>{
    //     setTimeout(()=>{
           
    //         setProduct({productName:'Name gotten from database'});
    //     },1500);
    // },[id])

    const addToCart = ()=>{
        const t= product.productAmount * quantity;
        setTotalAmount(t)
        setCartState([...cartState, {...product, quantity, totalAmount:t}]);
        
        setTimeout(()=>{
            navigate('/customer'); 
        },500);
    }

    useEffect(()=>{
        // alert('Added')
        
        localStorage.setItem('cartItems', JSON.stringify(cartState));
        console.log("testing total amount",cartState);
        
    },[cartState])

    if(!product){
        return <p>Loading...</p>
    }

    return <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center",  maxWidth:"50vw", maxHeight:"60vh", margin:"50px auto"}}>
        
        <div>
            <MenuItem size={"large"} productImage={item.productImage} productName={item.productName}/>
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",}}>
            <p>Cost/Product: {product.productAmount}</p>
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center",gap:"40px"}}>
            <Counter update={setQuantity}/>
            <Button variant="outlined" color="success" onClick={addToCart}>{"add to cart"} </Button>
        </div>
    </div>
    
}

export default ItemDetail