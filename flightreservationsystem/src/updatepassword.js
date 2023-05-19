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

function UpdatePassword() {

        var [user, setUser] = useState({
                                    email:"",
                                    password:""
                                    })

    var [message, setMessage] = useState("")

    var history = useHistory();


    var handleChange = (args) =>{
                                    debugger;
                                    var copy = {...user}
                                    copy[args.target.name] = args.target.value;
                                    setUser(copy);
                                }

    var update = (props) =>{
                                debugger;
                                if(user.email == ""){
                                    var copy = {...user}
                                    copy.email = null;
                                    setUser(copy);
                                }
                                axios.post("addlink here", user).then((result)=>{
                                    debugger;
                                    if(result.data == ""){
                                        setMessage("Unable to update.. Please try again..");
                                    }
                                    else{
                                        debugger;
                                        console.log(result.data);
                                        setMessage("Updated successfully");
                                        history.push('/signin')
                                    }
                                })
                            }

  return (
    <center>
    <div style={{width:'700px'}}>
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='12' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <b><p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Password</p></b>
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
                label="New Password"
                type="password"
                autoComplete="current-password"
                value={user.password}
                onChange={handleChange}
                name='password'
              />
            </Stack>
            <br></br>
            <Stack>
              <Button variant='contained' onClick={()=>{update(user)}}>Update</Button>
            </Stack>

            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
    </center>
  );
}

export default UpdatePassword;