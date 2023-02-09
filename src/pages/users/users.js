import React from "react";
import { Link } from "react-router-dom";
import ModalButton from "../../components/modal/modal";
import BasicTable from "../../components/tables/table";
import AddUser from "../adduser/adduser";

const users = [
    {label:"Users", key:"userName"},
    {label:"Emails", key:"email"},
    {label:"User Category", key:"userCategory"}
]

const contacts = [
    {userName:"first customer", email:"first@mail.com", userCategory:"customer"},
    {userName:"second customer", email:"first@mail.com", userCategory:"customer"},
    {userName:"third customer", email:"first@mail.com", userCategory:"customer"},
    {userName:"fourth customer", email:"first@mail.com", userCategory:"customer"},
    {userName:"fifth customer", email:"first@mail.com", userCategory:"customer"}
]

const Users = ()=>{
return(
    <div className="homepage">
        <div style={{marginLeft:"80%"}}>
            <Link to={'/admin/adduser'}>
                <ModalButton form={<AddUser/>} title={"add user"} />
            </Link>
            
        </div>
        <BasicTable columns={users} rows={contacts}/>
    </div>
)
}

export default Users;
