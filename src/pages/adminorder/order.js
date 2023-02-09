import React from "react";
import BasicTable from "../../components/tables/table";

const lists = [
    {customerName:"first Customer", productName:["apple",", ","ball"," ,","bread"], quantity:1, cost:"15,000"},
    {customerName:"second Customer", productName:["ball",", ","bread"], quantity:2, cost:"15,000"},
    {customerName:"third Customer", productName:["bread"], quantity:3, cost:"15,000"}
]

const column = [
    {label:"Customer Name", key:"customerName"},
    {label:"Product(s)", key:"productName"},
    {label:"Quantity", key:"quantity"},
    {label:"Amount", key:"cost"}
]

const Order = ()=>{

    return(
        <BasicTable columns={column} rows={lists}/>
    )
}

export default Order