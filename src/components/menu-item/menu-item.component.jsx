import React from "react";
import './menu-item.styles.scss'

const MenuItem = ({productName, productImage, size})=>{
    return (
            <div className={` ${size} menu-item`}>
                <div className="background-image" style={{backgroundImage:`url(${productImage})`}}/>
                <div className="content">
                    <h1 className="title">{productName}</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            )
}

export default MenuItem;