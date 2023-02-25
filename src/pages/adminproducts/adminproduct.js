import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalButton from "../../components/modal/modal";
import BasicTable from "../../components/tables/table";
import { requestApi } from "../../logic/client_api/client";
import AddProduct from "../addproduct/addproduct";
import ButtonComp from "../../components/button/button";


// function createData(productName, quantity, Amount, totalAmount, Action) {
//     return { productName, quantity, Amount, totalAmount, Action };
//   }
  
  // const rows = [
  //   {productName:'Hat', productQuantity:1, productCategory:'string', productAmount:1000, productImage:"image", Action:"button"},
  //   {productName:'Jacket', productQuantity:3, productCategory:'string', productAmount:1000, productImage:"image",Action:"button"},
  //   {productName:'Sneakers',productQuantity:1,  productCategory:'string', productAmount:1000, productImage:"image",Action: "button"},
  //   {productName:'Jean',productQuantity: 1,  productCategory:'string', productAmount:1000, productImage:"image",Action:"button"},
  //   {productName:'Hair', productQuantity:2,  productCategory:'string', productAmount:2100,  productImage:"image",Action:"button"},
  // ];
  
  const tableHeaders = [
      {label:"Products", key: 'productName'},
      {label:"Quantity", key: 'productQuantity'},
      {label:"Category", key: 'productCategory'},
      {label:"Amount", key: 'productAmount'},
      // {label:"Product Image", key: 'productImage'},
      {label:"Button", key: 'Action'}
  ]
  

const AdminProduct = ()=>{

  const [products, setProducts] = useState([])

//  const navigate = useNavigate()

  useEffect(()=>{

    const token = JSON.parse(localStorage.getItem('token') || '')

    // dis request is to get products from the backend

    requestApi('/api/v1/product',"GET",token)
    .then(res=>{
      const prods = res.payload

      // this function handles what happens wen the delete button is clicked, and reload the page.

      const DeleteBtn = (id)=>{

        requestApi(`/api/v1/product/${id}`,'DELETE',token)
        .then(res=>{
          if(res){

            setTimeout(()=>{
              alert("You are about to delete a product!")
              window.location.reload(true)
            // wanted to use navigate to reload the page n included it in the dependency of useEffect, but since im still on the same url, it wasnt responsive so im using the above method to reload the page
            // navigate('/admin')
            },500)
            
            
          }
        }).catch(err=>{
          return "error occurred in deleting a product"
        })
        
      }
      
      // this is to add the delete button to the products before setting products

      const allProducts = prods.map((pro)=>({...pro, Action:<ButtonComp buttonValue={"delete"} onClick={()=>DeleteBtn(pro._id)}/>}))

      setProducts(allProducts)
    })
    .catch(err=>{

      console.log(err.message);
    })
  },[])
    return(
        
        <div className="homepage">
            <div style={{marginLeft:"80%"}}>
            {/* {console.log("admin produts", products)} */}
              <Link to={'/admin/addproduct'}>
                <ModalButton form={<AddProduct/>} title={"add product"}/>
              </Link>
            </div>
            <BasicTable columns={tableHeaders} rows={products} />
        </div>
    )
}

export default AdminProduct;