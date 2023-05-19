import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import UpdateUserProfile from "./updateuserprofile";
import { Button, Table } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ShowUserDetails() {
    const [userDetails, setuserDetails] = useState([])
    var send = {email:sessionStorage.getItem("email")};
    debugger; 
     useEffect( ()=>{
      debugger;
      var token = sessionStorage.getItem("token")
         axios.post("http://localhost:5050/user/userDetails",send, {headers:{"Authorization" : "Bearer " +token}})
            .then(result => result.data)
            .then((result) => {
                setuserDetails(result);  
            }) 
    },[]);

    // useEffect(()=>{
    //   var token = sessionStorage.getItem("token")
    //    axios.post("http://localhost:5050/user/userDetails",send, {headers:{"Authorization" : "Bearer " +token}})
    //   .then(result => result.data)
    //   .then((result) => {
    //       setuserDetails(result);  
    //   }) 
      

    // },[userDetails])
    
    function logOut() {
        sessionStorage.removeItem("email");
    }
    
    return(<>
    <Button variant="outlined" sx={{m:2}}><Link to={"/updateuserprofile"}>Update</Link></Button>
    <Button variant="contained" color="inherit" sx={{marginRight:2}}><Link to={"/userdashboard"}>Back</Link></Button>    
    <Button variant="contained" color="inherit" ><Link to={"/signin"} onClick={logOut}>LogOut</Link></Button>
        <center>
        <h4>User Information</h4>
        <hr></hr>
        <div >
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead  sx={{ '&:last-child td, &:last-child th': { border: 2 } }}>
          <TableRow>
            <TableCell>Field</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ '&:last-child td, &:last-child th': { border: 1 } , marginBottom:2} }>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>{userDetails.firstName}</TableCell>    
            </TableRow><TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>{userDetails.lastName}</TableCell>
            </TableRow><TableRow>
              <TableCell>Email Address</TableCell>
              <TableCell>{userDetails.email}</TableCell>
            </TableRow><TableRow>          
              <TableCell>Date of Birth</TableCell>
              <TableCell>{userDetails.dob}</TableCell>
            </TableRow><TableRow>
              <TableCell>Mobile No.</TableCell>
              <TableCell>{userDetails.mobile}</TableCell>
            </TableRow><TableRow>
              <TableCell>Gender</TableCell>
              <TableCell>{userDetails.gender}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>      
        </center>

    </>);

}

export default ShowUserDetails;
