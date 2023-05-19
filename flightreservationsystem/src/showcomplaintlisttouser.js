import axios from "axios";
import React, {useEffect, useState} from "react";
import { Button} from "@mui/material";
import { Link} from "react-router-dom";



function ShowComplaintListToUser () {
    const [allComplaints, setallComplaints] = useState([])    
    var send = {email:sessionStorage.getItem("email")};
    function getComplaints() {    
        var token = sessionStorage.getItem("token")
        axios.post("http://localhost:5050/user/allcomplaints", send, {headers:{"Authorization" : "Bearer " +token}})     
        .then(result => result.data)    
        .then((result) => {    
            setallComplaints(result)    
            console.log(result);    
        });    
    }    
useEffect(()=>{    
    getComplaints();    
},[]);

function logOut() {
    sessionStorage.removeItem("email");
}
        
return (<>
    <Button variant="contained" color="inherit" sx={{m:2}}><Link to={"/userdashboard"}>Back</Link></Button>   
    <Button variant="contained" color="inherit" ><Link to={"/signin"} onClick={logOut}>LogOut</Link></Button>
    <center> 
    <h3>Complaints</h3>  
    <hr></hr>
    <div>
        <Button variant="contained" color="inherit" sx={{m:2}}><Link to={"/addcomplaintbyuser"}>Add complaint</Link></Button>    
        <table border={2} text-align="center">
            <thead>    
                <tr>
                    <th key={1}>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {allComplaints.map(complaint=>
            {return (<>
                <tr><td key={complaint.id}>
                    {complaint.title}
                    </td><td>
                    {complaint.description}
                    </td><td>
                    {complaint.status}
                    </td></tr>
            </>)})}                
            </tbody>
        </table>
    </div></center>
</>);
}   
export default ShowComplaintListToUser;
