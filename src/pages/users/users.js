import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../../components/button/button";
import ModalButton from "../../components/modal/modal";
import BasicTable from "../../components/tables/table";
import { requestApi } from "../../logic/client_api/client";
import AddUser from "../adduser/adduser";

const userHeader = [
    {label:"Users", key:"userName"},
    {label:"Emails", key:"email"},
    {label:"User Category", key:"userCategory"},
    {label:'Action', key:"Action"}
]

// const contacts = [
//     {userName:"first customer", email:"first@mail.com", userCategory:"customer"},
//     {userName:"second customer", email:"first@mail.com", userCategory:"customer"},
//     {userName:"third customer", email:"first@mail.com", userCategory:"customer"},
//     {userName:"fourth customer", email:"first@mail.com", userCategory:"customer"},
//     {userName:"fifth customer", email:"first@mail.com", userCategory:"customer"}
// ]



const Users = ()=>{

    const [allUsers, setAllUsers] = useState([])

    useEffect(()=>{

        const token = JSON.parse(localStorage.getItem("token")) 

        const DeleteBtn = (id)=>{
            requestApi(`/api/v1/user/${id}`,"DELETE",token)
            .then(res=>{
                if(res.response === 'ok'){
                    alert("You are about to delete a user")
                    window.location.reload(true)
                }
            }).catch(err=>{
                alert("error deleting user")
            })
        }

        requestApi('/api/v1/user',"GET",token)
        .then(res=>{
            if(res.response === 'ok'){
                const user = res.payload
                const eachUser = user.map(usr=>({...usr, Action:<ButtonComp buttonValue={"Delete"} onClick={()=>{DeleteBtn(usr._id)}}/>}))
                setAllUsers(eachUser)
            }
        })
        .catch(err=>{
            return err.message;
        })
    },[])

return(
    <div className="homepage">
        <div style={{marginLeft:"80%"}}>
            <Link to={'/admin/adduser'}>
                <ModalButton form={<AddUser/>} title={"add user"} />
            </Link>
        </div>
        <BasicTable columns={userHeader} rows={allUsers}/>
    </div>
)
}

export default Users;
