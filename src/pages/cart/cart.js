import React, { useEffect, useState } from "react";
import ButtonComp from "../../components/button/button";
import BasicTable from "../../components/tables/table";



const product = [
    // {productName:'Hat', quantity:1, productAmount:1000, totalAmount:1000},
    // {productName:'Jacket', quantity:3, productAmount:1000, totalAmount:3000},
    // {productName:'Sneakers',quantity:1, productAmount:1000, totalAmount:1000},
    // {productName:'Jean',quantity: 1, productAmount:1000, totalAmount:3000},
    // {productName:'Hair', quantity:2, productAmount:2100, totalAmount:3000}
];





       


const Cart = ()=>{

    const [products, setProducts] = useState([])

    useEffect(()=>{
        let cartInfo = localStorage.getItem('cartItems')
        setProducts(JSON.parse(cartInfo) || [])
        // product.push(products)
        // console.log(products);
    },[])


//     const [counter, setCounter] = useState(0)
    const tableHead = [
        {key: 'productName', label:'Product name'}, 
        {key: 'quantity', label:'Quantity'}, 
        {key: 'productAmount', label:'Amount'}, 
        {key: 'totalAmount', label:'Total amount'}, 
    ];
    return(
        <div className="homepage">
            <BasicTable columns={tableHead} rows={products} />
            <div style={{marginTop:"15px"}}/>
            <ButtonComp buttonValue={"Order"}/>
            
        </div>
        
    )
}

export default Cart