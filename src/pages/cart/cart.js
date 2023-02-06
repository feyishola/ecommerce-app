import React, { useState } from "react";
import ButtonComp from "../../components/button/button";
import BasicTable from "../../components/tables/table";

// function createData(productName, quantity, Amount, totalAmount, Action) {
//     return { productName, quantity, Amount, totalAmount, Action };
//   }
  
//   const rows = [
//     // {productName:'Hat', quantity:1, Amount:1000, totalAmount:1000, Action:"button"},
//     // {productName:'Jacket', quantity:3, Amount:1000, totalAmount:3000, Action:"button"},
//     // {productName:'Sneakers',quantity:1, Amount:1000, totalAmount:1000,Action: "button"},
//     // {productName:'Jean',quantity: 1, Amount:1000, totalAmount:3000, Action:"button"},
//     // {productName:'Hair', quantity:2, Amount:2100, totalAmount:3000, Action:"button"},

//     createData('Hat', 1, 6000, 6000, "button"),
//     createData('Jacket', 3, 6000, 18000, "button"),
//     createData('Sneakers', 1, 12000, 12000, "button"),
//     createData('Jean', 1, 3000, 3000, "button"),
//     createData('Hair', 2, 2500, 5000, "button"),
//   ];
  
//   const columnHead = [
//       {header:"Products"},
//       {header:"Quantity"},
//       {header:"Amount"},
//       {header:"Total Amount"},
//       {header:"Button"}
//   ]

const products = [
    {productName:'Hat', quantity:1, amount:1000, totalAmount:1000},
    {productName:'Jacket', quantity:3, amount:1000, totalAmount:3000},
    {productName:'Sneakers',quantity:1, amount:1000, totalAmount:1000},
    {productName:'Jean',quantity: 1, amount:1000, totalAmount:3000},
    {productName:'Hair', quantity:2, amount:2100, totalAmount:3000},
];


const Cart = ()=>{
//     const [counter, setCounter] = useState(0)
    const columns = [
        {key: 'productName', label:'Product name'}, 
        {key: 'quantity', label:'Quantity'}, 
        {key: 'amount', label:'Amount'}, 
        {key: 'totalAmount', label:'Total amount'}, 
    ];
    return(
        <div className="homepage">
            
            <BasicTable columns={columns} rows={products} />
            <div style={{marginTop:"15px"}}/>
            <ButtonComp buttonValue={"Order"}/>
            
        </div>
        
    )
}

export default Cart