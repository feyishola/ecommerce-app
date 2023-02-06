import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/navbar.component";

const Layout = ()=>{
    return(
        
       <div>
            <NavBar/>
            <Outlet/>
       </div>
            
       
    )
}

export default Layout;