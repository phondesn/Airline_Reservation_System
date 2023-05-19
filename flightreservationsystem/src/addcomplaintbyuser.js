import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShowComplaintListToUser from './showcomplaintlisttouser';
import axios from 'axios';


function AddComplaintByUser() {
    var [newComplaint, setNewComplaint] = useState({title:"",description:"",status:"NEW",email:sessionStorage.getItem("email")}) 

    function handleChange(args) {
        var copy ={...newComplaint}
        copy[args.target.name] = args.target.value;
        setNewComplaint(copy)
        console.log(newComplaint);
    }

    function logOut() {
        sessionStorage.removeItem("email");
    }

    var addComplaint = () =>{
           debugger;
           var token = sessionStorage.getItem("token")
           axios.post("http://localhost:5050/user/addcomplaint",newComplaint, {headers:{"Authorization" : "Bearer " +token}})
               .then((updatedResult)=>{
                setNewComplaint(updatedResult.data)
               })
       }

    return(<>
        <Button variant="contained" color="inherit" sx={{m:2}}><Link to={"/showcomplaintlisttouser"}>Back</Link></Button>
        <Button variant="contained" color="inherit" ><Link to={"/signin"} onClick={logOut}>LogOut</Link></Button>
    
        <center>
            <h3>Add complaint here</h3>
            <hr></hr>
            <div>
            <TextField
                required
                name="title"
                label="Title"
                id="outline-lname" sx={{marginBottom:2}}
                onChange={handleChange}/><br/>
                <TextField
                required
                name="description"
                label="Description"
                id="outline-lname" sx={{marginBottom:2}}
                onChange={handleChange}/><br/>
                <TextField
                disabled
                value="NEW"
                name="status"
                label="Status"
                id="outline-lname" sx={{marginBottom:2}}/><br/>
                <Link to={"/showcomplaintlisttouser"}><Button variant="contained" color="inherit" sx={{marginTop:2, marginBottom:2}} onClick={addComplaint}>Add</Button></Link>
                <Button variant="contained" color="inherit" sx={{marginLeft:4, marginTop:2, marginBottom:2}}><Link to={"/showcomplaintlisttouser"}>Cancel</Link></Button>
            
            </div>
        </center>    
    
    </>)
}

export default AddComplaintByUser;