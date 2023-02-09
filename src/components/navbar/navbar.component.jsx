import React from "react";
import { Link} from "react-router-dom";
import './navbar.style.scss'

const NavBar = ()=>{
    // const [item, setItem] = useState([])
    
    return(
        <nav>
            <ul>
               <li>
                    <Link to={"/customer"}>Home</Link>
                </li>
                <li>
                    <Link to={"/customer/cart"}>Cart</Link>
                </li>
                <li>
                    <Link to={"/customer/order"}>Orders</Link>
                </li>
                <li>
                    <Link to={"/customer/logout"}>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;