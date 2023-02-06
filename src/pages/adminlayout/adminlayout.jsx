import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = ()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/admin"}>Products</Link>
                    </li>
                    <li>
                        <Link to={"/admin/order"}>Order</Link>
                    </li>
                    <li>
                        <Link to={"/admin/user"}>Users</Link>
                    </li>
                    <li>
                        <Link to={"/logout"}>Logout</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default AdminLayout