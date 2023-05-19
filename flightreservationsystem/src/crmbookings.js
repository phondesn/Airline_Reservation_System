import { MDBCard } from "mdb-react-ui-kit";
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Stack } from "@mui/system";
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from "react";
import axios from "axios";

function CrmBookings() {

    var [bookings, setBookings] = useState([]);

    var token = sessionStorage.getItem("token");

    var [email, setEmail] = useState(sessionStorage.getItem("email"))

    var [url, setUrl] = useState("");

    useEffect(()=>{
        debugger;
                    url = "http://localhost:5050/user/"+email
                    axios.get(url,{headers:{
                        "Authorization":"Bearer " + token
                    }}).then((result)=>{
                        setBookings(result.data)
                    })
    },[])
    debugger;

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
                    <tbody>
                    <tr class='table-dark'>
                        <td>Ticket ID</td>
                        <td>Flight ID</td>
                        <td>Seats</td>
                    </tr>
                    {bookings.map(book=>{
                        return <tr key={book.id} class='table-danger'>
                            <td>{book.id}</td>
                            <td>{book.flight}</td>
                            <td>{book.seats}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </Stack>
            </div>
        </div>
     );
}

export default CrmBookings;