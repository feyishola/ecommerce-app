import React, {createContext, useContext, useState} from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'




const Directory = ()=>{
    const [state, setState] = useState([
        {
            productName:"Hats",
            productImage:"https://m.media-amazon.com/images/I/71UC5TkXixL._AC_UL1200_.jpg",
            productQuantity:1, 
            productCategory:'string', 
            productAmount:1000,
            id:1,
        },
        {
            productName:"Jackets",
            productImage:"https://www.rei.com/media/product/1768740051",
            productQuantity:1, 
            productCategory:'string', 
            productAmount:1000,
            id:2
        },
        {
            productName:"Sneakers",
            productImage:"https://images.yaoota.com/P8xa5OBvOi3cV0A9w9xIVoGgFIY=/trim/yaootaweb-production-ng/media/crawledproductimages/200c49eb101e4d04df5b0cdfc7a735ed03dbdcb4.jpg",
            productQuantity:1, 
            productCategory:'string', 
            productAmount:1000,
            id:3
        },
        {
            productName:"Womens",
            productImage:"https://guardian.ng/wp-content/uploads/2022/12/Tobby-Lordwilliams-556x312.jpg",
            productQuantity:1, 
            productCategory:'string', 
            productAmount:1000,
            size:"large",
            id:4
        },
        {
            productName:"Mens",
            productImage:"https://glaminati.com/wp-content/uploads/2022/09/tp-best-mens-haircuts.jpg",
            productQuantity:1, 
            productCategory:'string', 
            productAmount:1000,
            size:"large",
            id:5
        }
    ]);

    // const value = useContext(DataContext)

    // const {product} = value
        
    const navigate = useNavigate()

    const detail =  (id,obj)=>{
        // console.log(id,obj);
        navigate(`/customer/detail?id=`+id, {state:{item:obj}});
    }

    // useEffect(async ()=>{
    //     let products = await fetch('url.. to the backend');
    //     let response = await products.json()
    //     setState(response)
    // },[])

    
    
    return(
            <div className="directory-menu">
                {state.map(({productName,id, productImage, size})=>{
                return (
                        <MenuItem key={id} productName={productName} productImage={productImage} size={size} onClick={()=>detail(id,{id,productName,productImage})}/>
                )
                
                })}
            </div>
    )
}

export default Directory;