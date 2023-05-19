import { MDBCard } from "mdb-react-ui-kit";
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
import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";

function CrmComplaints() {

    var [complaints, setComplaints] = useState([]);
    var history = useHistory();

    var token = sessionStorage.getItem("token");

    useEffect(()=>{
                    axios.get("http://localhost:5050/crm/complaints",{headers:{
                        "Authorization":"Bearer " + token
                    }}).then((result)=>{
                        setComplaints(result.data)
                    })
    },[])

    var statusChange = (compId) => {
        history.push("/statusChange", {params:compId});
        // history.push("/signin")
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
            <div style={{display:'flex', flexWrap:'wrap'}}>
            <Stack direction='row' spacing={2}>
                <table className="tbl tbl-responsive" class='table'>
                    <thead>
                    <tr class='table-dark'>
                        <th>Complaint ID</th>
                        <th>Complaint Title</th>
                        <th>User Email</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {complaints.map(comp=>{
                        return <tr key={comp.id} class='table-danger'>
                            <td>{comp.id}</td>
                            <td>{comp.title}</td>
                            <td>{comp.userComplaint.email}</td>
                            <td>{comp.description}</td>
                            <td>{comp.status}</td>
                            <td><Button 
                            variant="contained" 
                            color="inherit" 
                            sx={{marginTop:2, marginBottom:2}} 
                            onClick={()=>statusChange(comp.id)}>
                                Change Status
                            </Button>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </Stack>
            </div>       
        </div>
     );
}

export default CrmComplaints;