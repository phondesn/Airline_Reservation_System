import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
import ShowFeedbackListToUser from './showfeedbacklisttouser';


function AddFeedbackByUser() {
    
    const [newFeedback, setNewFeedback] = useState({title:"",description:"",email:sessionStorage.getItem("email")}) 

    function handleChange(args) {
        
        var copy ={...newFeedback}
        copy[args.target.name] = args.target.value;
        setNewFeedback(copy)
        console.log(newFeedback);
        
    }

    function logOut() {
        sessionStorage.removeItem("email");
    }

    var addFeedback = () =>{
     // var feedbackDetails = {title:newFeedback.title,description:newFeedback.description,email:sessionStorage.getItem("email")};
        debugger;
        var token = sessionStorage.getItem("token")
        axios.post("http://localhost:5050/user/addfeedback",newFeedback, {headers:{"Authorization" : "Bearer " +token}})
            .then((updatedResult)=>{
                setNewFeedback(updatedResult.data)
            })
    }

    return(<>
        <Button variant="contained" color="inherit" sx={{m:2}}><Link to={"/showfeedbacklisttouser"}>Back</Link></Button>
        <Button variant="contained" color="inherit" sx={{textAlign:'right'}}><Link to={"/signin"} onClick={logOut} >LogOut</Link></Button>
    
        <center>
            <h3>Add feedback here</h3>
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
                id="outline-lname" 
                onChange={handleChange}/><br/>
            <Link to={"/showfeedbacklisttouser"}><Button variant="contained" color="inherit" sx={{marginTop:2, marginBottom:2}} onClick={addFeedback}>Add</Button></Link>
            <Button variant="contained" color="inherit" sx={{marginLeft:4, marginTop:2, marginBottom:2}}><Link to={"/showfeedbacklisttouser"}>Cancel</Link></Button>
            </div>
        </center>    
    
    </>)
}

export default AddFeedbackByUser;