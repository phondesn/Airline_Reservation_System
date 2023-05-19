import { MDBBtn, MDBCard } from "mdb-react-ui-kit";
import Fab from '@mui/material/Fab';
import { Link, useHistory } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Stack } from "@mui/system";
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from "react";
import axios from "axios";
import PortraitIcon from '@mui/icons-material/Portrait';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';

function CrmUpdateProfile() {

    var history = useHistory();

    var [user, setUser] = useState({})

    var url = useState("");

    var [email, setEmail] = useState({email:sessionStorage.getItem("email")});

    var token = sessionStorage.getItem("token");

    var handleChange = (args) =>{
                                    var copy = {...user}
                                    copy[args.target.name] = args.target.value;
                                    setUser(copy);
    }

    useEffect(()=>{
                    axios.post("http://localhost:5050/user", email, {headers:{
                        "Authorization":"Bearer " + token}}).then((result)=>{
                            setUser(result.data);
                            console.log(result.data);
                        })
                },[])

    var updateDetails = async () => {
                                url = "http://localhost:5050/user/"+email.email
                                debugger;
                                await axios.put(url, user, {headers:{
                                    "Authorization":"Bearer " + token,
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"}}).then((result)=>{
                                    console.log(result.data);
                                })
                                history.push('/crmprofile')
    }
    return ( 
        <div style={{display:'flex', flexWrap:'wrap'}}>
            <Stack style={{margin:'5px'}}>
                <Link to={"/crmprofile"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                        <Tooltip title='Profile' arrow>
                        <AccountCircleIcon></AccountCircleIcon>
                        </Tooltip>
                    </Fab>
                </Link>
                <Link to={"/crmcomplaints"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                    <Tooltip title='Complaints' arrow>
                        <MarkEmailReadIcon></MarkEmailReadIcon>
                        </Tooltip>
                    </Fab>
                </Link>
                <Link to={"/crmfeedbacks"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                    <Tooltip title='Feedbacks' arrow>
                        <MarkChatReadIcon></MarkChatReadIcon>
                        </Tooltip>
                    </Fab>
                </Link>
                <Link to={"/crmbookings"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px', marginBottom:'15px'}}>
                    <Tooltip title='Bookings' arrow>
                        <LibraryBooksIcon></LibraryBooksIcon>
                        </Tooltip>
                    </Fab>
                </Link>
            </Stack>
            <Stack>
                <MDBCard className='text-black m-2'>
                    <Stack direction='row' spacing={2} padding={'5px'}>
                        <PortraitIcon sx={{fontSize:80}}></PortraitIcon>
                    </Stack>
                    <Stack direction='row' spacing={2} padding={'5px'}>
                        <TextField
                                required
                                id="idFname"
                                label="First Name"
                                value={user.firstName}
                                name='firstName'
                                color="secondary" focused
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="idLname"
                                label="Last Name"
                                value={user.lastName}
                                name='lastName'
                                color="secondary" focused
                                onChange={handleChange}
                            />
                    </Stack>
                    <Stack spacing={2} padding={'5px'}>
                        <TextField
                                required
                                id="idemail"
                                label="Email"
                                value={user.email}
                                name='email'
                                color="secondary" focused
                                InputProps={{
                                    readOnly: true,
                                  }}
                            />
                    </Stack>
                    <Stack direction='row' spacing={2} padding={'5px'}>
                        <TextField
                                required
                                id="iddob"
                                label="Date of Birth"
                                value={user.dob}
                                name='dob'
                                color="secondary" focused
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="idrole"
                                label="Role"
                                value={user.role}
                                name='role'
                                color="secondary" focused
                                InputProps={{
                                    readOnly: true,
                                  }}
                            />
                    </Stack>
                    <Stack direction='row' spacing={2} padding={'5px'}>
                        <TextField
                                required
                                id="idgender"
                                label="Gender"
                                value={user.gender}
                                name='gender'
                                color="secondary" focused
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="idmobile"
                                label="Mobile"
                                value={user.mobile}
                                name='mobile'
                                color="secondary" focused
                                onChange={handleChange}
                            />
                    </Stack>
                    <Stack direction='row' spacing={2} padding={'5px'}>
                        <Button variant="contained" onClick={updateDetails}>Save Details</Button>
                    </Stack>
                </MDBCard>
            </Stack>
        </div>
     );
}

export default CrmUpdateProfile;