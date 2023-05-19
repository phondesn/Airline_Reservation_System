import axios from "axios";
import { useEffect, useState } from "react";

function ChangeRole(){

    var [role,setrole] = useState("")
    var [mesg,setmesg] = useState("")

    var [usermail,setusermail] = useState("")
    var [url] = useState("")
    var HandleChange = (args)=>{
        setusermail(args.target.value);
    }
    var HandleChange1 = (args)=>{
         debugger;
        role = args.target.value;
        setrole(role)
    }
    var RoleChange = ()=>{
        url = "http://localhost:5050/Admin/Users/"+usermail;
        var token = sessionStorage.getItem("token")
        axios.post(url,{
            role:role
        },{headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
                setmesg(result.data)
        }).catch((result)=>{
            setmesg("Error in changing roles")
        })
    }
    useEffect(()=>{
            setTimeout(()=>{
                setmesg("")
            },5000)
    },[mesg])
    return <center>
        <div>
        Enter email : <input type={'text'} value = {usermail} onChange = {HandleChange}></input><button onClick={RoleChange}>Change Role</button>
        <br></br><br></br>
        <select name="roles" id="roles" onChange={HandleChange1}>
            <option value="undefined">Select Roles</option>
        <option value= "ROLE_USER" >User</option>
        <option value="ROLE_FLIGHTMANAGER">Flight Manager</option>
        <option value="ROLE_CRM">CRM</option>
        </select>
        <h1 style={{color:"green"}}>{mesg}</h1>
        </div>
    </center>
}

export default ChangeRole;