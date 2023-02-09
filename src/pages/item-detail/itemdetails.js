import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Counter, value } from "../../components/counter/counter";
import MenuItem from "../../components/menu-item/menu-item.component";

const ItemDetail = ()=>{
    const location = useLocation()
    const [params] = useSearchParams();

    // const countValue = useContext(value)

    const id = params.get('id');
    const {item} = location.state || {};

    const [product, setProduct] = useState(item);

    
    // useEffect(()=>{
    //     setTimeout(()=>{
           
    //         setProduct({productName:'Name gotten from database'});
    //     },1500);
    // },[id])

    if(!product){
        return <p>Loading...</p>
    }

    return <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center",  maxWidth:"50vw", maxHeight:"60vh", margin:"50px auto"}}>
        
        <div>
            <MenuItem size={"large"} productImage={item.productImage} productName={item.productName}/>
        </div>
        {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",}}>
            <p>{product.productName}</p>
        </div> */}
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center",gap:"40px"}}>
            <Counter/>
            <Button variant="outlined" color="success" onClick={()=>{console.log(product)}}>{"add to cart"} </Button>
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",}}>
            
        </div>
    </div>
    
}

export default ItemDetail