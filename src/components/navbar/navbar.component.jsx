import React from "react";
import { Link} from "react-router-dom";
import './navbar.style.scss'

const NavBar = ()=>{
    // const [item, setItem] = useState([])
    
    return(
        <nav>
            <ul>
               <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Cart</Link>
                </li>
                <li>
                    <Link to={"/order"}>Orders</Link>
                </li>
                <li>
                    <Link to={"/logout"}>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;