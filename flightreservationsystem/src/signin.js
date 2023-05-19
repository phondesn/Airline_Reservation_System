import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard
}
from 'mdb-react-ui-kit';
import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Dashboard from './userdashboard';
import CrmDashboard from './crmdashboard';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import jwtDecode from 'jwt-decode';
import { Padding } from '@mui/icons-material';

function Signin(props) {

  var [user, setUser] = useState({email:"" , password:""})
  var [message, setMessage] = useState("")
  var history = useHistory();
  var location = useLocation();

  var handleChange = (args) =>{
                              debugger;
                              var copy = {...user};
                              copy[args.target.name] = args.target.value;
                              setUser(copy);
  }

  var signIn = ()=>{
    debugger;
    axios.post("http://localhost:5050/authenticate",user).then((result)=>{
      var token = result.data;
      var decoded = jwtDecode(token);
      var role = decoded.role;
      sessionStorage.setItem("email",decoded.name);
      sessionStorage.setItem("token",token);
      console.log(role)
    
      if(role == "ROLE_USER"){
        if(typeof(location.state)!='undefined')
        {history.push('/listOfFlights',{params:location.state.params})
        sessionStorage.setItem("role",decoded.role);  
      }
        else
        history.push('/userdashboard')
        sessionStorage.setItem("role",decoded.role);
      }
      else if(role == "ROLE_CRM"){
        history.push('/crmdashboard');
        sessionStorage.setItem("role",decoded.role);
      }
      else if(role == "ROLE_ADMIN"){
        history.push('/dashboardadmin');
        sessionStorage.setItem("role",decoded.role);
      }
      else if(role == "ROLE_FLIGHTMANAGER"){
        history.push('/flightadmin');
        sessionStorage.setItem("role",decoded.role);
      }

  })
   
  }

  return (
    <center>
    <div style={{width:"600px"}}>
    <MDBContainer className="my-3">

      <MDBRow> 
    
        <MDBCol col='12' className="mb-5">
        <br></br>
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://careers.udaan.com/images/logo.png"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-2 mb-5 pb-1">We are The Udaan Team</h4>
              </div>
            <p className="pb-2"><b>Please login to your account</b></p>
            <Stack spacing={3}>
            <TextField
              required
              id="outlined-required"
              label="Email address"
              defaultValue={user.email}
              onChange={handleChange}
              name='email'
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
              name='password'
            />
            </Stack>
            <br></br>
            <div className="text-center pt-1 mb-5 pb-1">
              <button className='btn btn-primary' style={{width:'525px'}} onClick={()=>signIn({user})}>Sign In</button>
              <b>
              <Link to={'/updatepassword'} className="text-muted">Forgot password?</Link>
              </b>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <b><p className="mb-0">Don't have an account?{"   "}
              <Link to={'/register'}>
                <Button variant='contained'>Register</Button>
              </Link>
              </p></b>
            </div>
            <span style={{color:'red'}}>{message}</span>

          </div>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
    </center>
  );
}

export default Signin;