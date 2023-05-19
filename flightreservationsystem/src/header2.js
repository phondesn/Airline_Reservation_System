import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon
} from 'mdb-react-ui-kit';
import Fab from '@mui/material/Fab';
import { Link, useHistory } from 'react-router-dom';
import Header from "./header";

export default function Header2() {

  var history = useHistory();

function logout() {
  sessionStorage.removeItem("email");
}

var profileBtn = () =>
{
  var isLoggedIn=false
  var role = sessionStorage.getItem("role")
  var email = sessionStorage.getItem("email");
  // debugger;
  if (email!=null) {
      isLoggedIn=true;
  }
  if (isLoggedIn) {
    if(role == "ROLE_USER"){
    history.push('/userdashboard')
  }
  else if(role == "ROLE_CRM"){
    history.push('/crmdashboard');
  }
  else if(role == "ROLE_ADMIN"){
    history.push('/dashboardadmin');
  }
  else if(role == "ROLE_FLIGHTMANAGER"){
    history.push('/flightadmin');
  }
  } else {
      return <Header/>
  }
}

  return (
    <>
      <MDBNavbar light style={{ backgroundColor: '#41B3A3' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://careers.udaan.com/images/logo.png'
              height='80'
              alt='udaanair'
              loading='lazy'
            />
            <b class="fs-1">Udaan Air</b>
          </MDBNavbarBrand>
              
          <MDBNavbarBrand>
          <Fab variant="extended" 
               onClick={profileBtn}
               style={{backgroundColor:'#05386B', color:"white"}}>
                  Profile
                </Fab>{"  "}
              <Link to={"/home"}>
                <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white"}}>
                  Home
                </Fab>
              </Link>{"  "}
              <Link to={"/aboutus"}>
                <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white"}}>
                  About Us
                </Fab>
              </Link>{"  "}
              <Link to={"/contact"}>
                <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white"}}>
                  Contact
                </Fab>
              </Link>{"  "}
              <Link to={"/signin"}>
                <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white"}} onClick={logout}>
                  SignOut
                </Fab>
              </Link>{"  "}
              <Link to={"/home"}>
                <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white"}}>
                  IND/ENG
                </Fab>
              </Link>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}