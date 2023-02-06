import React from "react";
import BasicTable from "../../components/tables/table";

const lists = [
    {customerName:"first Customer", products:["apple",", ","ball"," ,","bread"], totalAmount:"15,000"},
    {customerName:"second Customer", products:["ball",", ","bread"], totalAmount:"15,000"},
    {customerName:"third Customer", products:["bread"], totalAmount:"15,000"}
]

const column = [
    {label:"Customer Name", key:"customerName"},
    {label:"Product(s)", key:"products"},
    {label:"Amount", key:"totalAmount"}
]

const Order = ()=>{

    return(
        <BasicTable columns={column} rows={lists}/>
    )
}

export default Order