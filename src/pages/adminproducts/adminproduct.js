import React from "react";
import { Link } from "react-router-dom";
import ModalButton from "../../components/modal/modal";
import BasicTable from "../../components/tables/table";
import AddProduct from "../addproduct/addproduct";



// function createData(productName, quantity, Amount, totalAmount, Action) {
//     return { productName, quantity, Amount, totalAmount, Action };
//   }
  
  const rows = [
    {productName:'Hat', productQuantity:1, productCategory:'string', productAmount:1000, productImage:"image", Action:"button"},
    {productName:'Jacket', productQuantity:3, productCategory:'string', productAmount:1000, productImage:"image",Action:"button"},
    {productName:'Sneakers',productQuantity:1,  productCategory:'string', productAmount:1000, productImage:"image",Action: "button"},
    {productName:'Jean',productQuantity: 1,  productCategory:'string', productAmount:1000, productImage:"image",Action:"button"},
    {productName:'Hair', productQuantity:2,  productCategory:'string', productAmount:2100,  productImage:"image",Action:"button"},
  ];
  
  const tableHeaders = [
      {label:"Products", key: 'productName'},
      {label:"Quantity", key: 'productQuantity'},
      {label:"Category", key: 'productCategory'},
      {label:"Amount", key: 'productAmount'},
      {label:"Product Image", key: 'productImage'},
      {label:"Button", key: 'Action'}
  ]
  

const AdminProduct = ()=>{
    return(
        
        <div className="homepage">
            <div style={{marginLeft:"80%"}}>
              
              <Link to={'/admin/addproduct'}>
                <ModalButton form={<AddProduct/>} title={"add product"}/>
              </Link>
            </div>
            <BasicTable columns={tableHeaders} rows={rows} />
        </div>
    )
}

export default AdminProduct;