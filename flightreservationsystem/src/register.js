import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Man2Icon from '@mui/icons-material/Man2';

function Register() {

        var [user, setUser] = useState({firstName:"",
                                    lastName:"",
                                    email:"",
                                    password:"",
                                    dob:"",
                                    mobile:"",
                                    gender:""
                                    })

    var [message, setMessage] = useState("")

    var history = useHistory();


    var handleChange = (args) =>{
                                    debugger;
                                    var copy = {...user}
                                    copy[args.target.name] = args.target.value;
                                    setUser(copy);
                                }

    var register = (props) =>{
                                debugger;
                                if(user.email == ""){
                                    var copy = {...user}
                                    copy.email = null;
                                    setUser(copy);
                                }
                                axios.post("http://localhost:5050/user/adduser", user).then((result)=>{
                                    debugger;
                                    if(result.data == ""){
                                        setMessage("Unable to register.. Please try again..");
                                    }
                                    else{
                                        debugger;
                                        console.log(result.data);
                                        setMessage("Registered successfully");
                                        history.push('/signin')
                                    }
                                })
                            }

  return (
    <center>
    <div style={{width:'1400px'}}>
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <b><p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register here for exciting benefits..</p></b>
            <Stack direction={'row'} spacing={2}>
              <DriveFileRenameOutlineIcon fontSize='large'></DriveFileRenameOutlineIcon>
              <TextField
                required
                id="idFirstName"
                label="First Name"
                defaultValue={user.firstName}
                onChange={handleChange}
                name='firstName'
              />
            </Stack>
            <br></br>
            <Stack direction={'row'} spacing={2}>
              <DriveFileRenameOutlineIcon fontSize='large'></DriveFileRenameOutlineIcon>
              <TextField
                required
                id="idLastName"
                label="Last Name"
                defaultValue={user.lastName}
                onChange={handleChange}
                name='lastName'
              />
            </Stack>
            <br></br>
            <Stack direction={'row'} spacing={2}>
              <EmailIcon fontSize='large'></EmailIcon>
              <TextField
                required
                id="idEmail"
                label="Email"
                defaultValue={user.email}
                onChange={handleChange}
                name='email'
              />
            </Stack>
            <br></br>
            <Stack direction={'row'} spacing={2}>
              <LockOpenIcon fontSize='large'></LockOpenIcon>
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
            <Stack direction={'row'} spacing={2}>
              <CalendarMonthIcon fontSize='large'></CalendarMonthIcon>
              <TextField
                required
                id="iddob"
                label="Date of Birth"
                defaultValue={user.dob}
                onChange={handleChange}
                name='dob'
              />
            </Stack>
            <br></br>
            <Stack direction={'row'} spacing={2}>
              <SendToMobileIcon fontSize='large'></SendToMobileIcon>
                <TextField
                  id="outlined-number"
                  label="Mobile Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='mobile'
                  value={user.mobile}
                  onChange={handleChange}
                />
            </Stack>
            <br></br>
            <Stack direction='row' spacing={2}>
              <Man2Icon fontSize='large'></Man2Icon>
              <FormControl sx={{ m: 1, minWidth: 230 }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={user.gender}
                  label="Gender"
                  name='gender'
                  onChange={handleChange}>
                    <MenuItem value={'M'}>Male</MenuItem>
                    <MenuItem value={'F'}>Female</MenuItem>
                    <MenuItem value={'O'}>Other</MenuItem>
                  </Select>
              </FormControl>
            </Stack>
            <br></br>
            <Stack>
              <b><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree and accept the terms and conditions' /></b>
            </Stack>
            <br></br>
            <Stack>
              <Button variant='contained' onClick={()=>{register(user)}}>Register</Button>
            </Stack>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
    </center>
  );
}

export default Register;