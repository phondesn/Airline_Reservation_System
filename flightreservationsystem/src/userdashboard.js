import { MDBCard, MDBCardTitle } from "mdb-react-ui-kit";
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Stack } from "@mui/system";
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from "react";
import axios from "axios";
import LogoutIcon from '@mui/icons-material/Logout';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ErrorIcon from '@mui/icons-material/Error';

function UserDashboard() {

   // var [user, setUser] = useState({});
    // var token = sessionStorage.getItem("token");

    var [user, setUser] = useState({email:sessionStorage.getItem("email")});

    useEffect( ()=>{
        debugger;
        var token = sessionStorage.getItem("token")
      axios.post("http://localhost:5050/user/userDetails",user,{headers:{"Authorization" : "Bearer " +token}})
         .then(result => result.data)
         .then((result) => {
             setUser(result);
         }) 
    },[]);

    function logOut() {
        sessionStorage.removeItem("email");
      }

    return ( 
        <div style={{display:'flex', flexWrap:'wrap'}}>
            <Stack style={{margin:'5px'}}>
                <Link to={"/showuserdetails"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                    <Tooltip title='Profile' arrow>
                        <AccountCircleIcon></AccountCircleIcon>
                    </Tooltip>
                    </Fab>
                </Link>
                <Link to={"/showfeedbacklisttouser"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                    <Tooltip title='Feedbacks' arrow>
                        <FeedbackIcon></FeedbackIcon>
                    </Tooltip>
                    </Fab>
                </Link>
                <Link to={"/showcomplaintlisttouser"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                    <Tooltip title='Complaints' arrow>
                        <ErrorIcon></ErrorIcon>
                    </Tooltip>
                    </Fab>
                </Link>
                <Link to={"/showticketstouser"}>
                    <Fab variant="Tickets" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px', marginBottom:'15px'}}>
                    <Tooltip title='Bookings' arrow>
                        <LibraryBooksIcon></LibraryBooksIcon>
                    </Tooltip>
                    </Fab>
                </Link>
                <Link to={"/signin"}>
                    <Fab variant="extended" onClick={logOut} style={{backgroundColor:'#05386B', color:"white", marginTop:'15px', marginBottom:'15px'}}>
                    <Tooltip title='LogOut' arrow>
                        <LogoutIcon></LogoutIcon>
                    </Tooltip>
                    </Fab>
                </Link>
            </Stack>
            <center>
            <Stack>
                <MDBCard className='text-black m-2'>
                    <MDBCardTitle>Welcome back {user.firstName}</MDBCardTitle>
                </MDBCard>
            </Stack>
            </center>
        </div>
     );
}

export default UserDashboard;