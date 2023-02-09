import React, { createContext, useState } from "react";

export const DataContext = createContext()

export const Dataprovider = (props)=>{

const [products, setProducts] = useState([
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
])

const getData = ()=>{

    fetch('url',{
        headers:{
            'Content-Type':'application/json'
        }
    }).then(async(res)=>{
        let response = await res.json()
        // setProducts(response)
    }).catch((err)=>{
        console.log(err);
    })
}

const value = {product:products}



    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

// export default Dataprovider