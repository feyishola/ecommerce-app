import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalButton from "../../components/modal/modal";
import BasicTable from "../../components/tables/table";
import { requestApi } from "../../logic/client_api/client";
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

  const [products, setProducts] = useState([])

  useEffect(()=>{

    const token = JSON.parse(localStorage.getItem('token') || '')

    requestApi('/api/v1/product',"GET",token)
    .then(res=>{
      const prods = res.payload
      setProducts(prods)
      
    })
    .catch(err=>{
      console.log(err.message);
    })
  },[])
    return(
        
        <div className="homepage">
            <div style={{marginLeft:"80%"}}>
            {console.log("admin produts", products)}
              <Link to={'/admin/addproduct'}>
                <ModalButton form={<AddProduct/>} title={"add product"}/>
              </Link>
            </div>
            <BasicTable columns={tableHeaders} rows={products} />
        </div>
    )
}

export default AdminProduct;