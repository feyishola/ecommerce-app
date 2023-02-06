import React from "react";
import { Link } from "react-router-dom";
import ModalButton from "../../components/modal/modal";
import BasicTable from "../../components/tables/table";
import AddUser from "../adduser/adduser";

const users = [
    {label:"Users", key:"users"},
    {label:"Emails", key:"email"}
]

const contacts = [
    {users:"first customer", email:"first@mail.com"},
    {users:"second customer", email:"first@mail.com"},
    {users:"third customer", email:"first@mail.com"},
    {users:"fourth customer", email:"first@mail.com"},
    {users:"fifth customer", email:"first@mail.com"}
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
