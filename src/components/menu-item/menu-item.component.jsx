import React from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../button/button";
import './menu-item.styles.scss'

const MenuItem = ({productName, productImage, productAmount, size,onClick})=>{
        
    return (
            <div className={` ${size} menu-item`} onClick={onClick}>
                    <div className="background-image" style={{backgroundImage:`url(${productImage})`}}/>
                    <div className="content">
                    <h1 className="title">{productName}</h1>
                    <span className="subtitle">Shop Now</span>
                    </div>
            </div>
            )
}

export default MenuItem;