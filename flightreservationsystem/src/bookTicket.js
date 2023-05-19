import axios from "axios";
import { Business } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Fab, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function BookTicket(){

var location = useLocation();
const [passengerlist, setPassengerList] = useState(location.state.params.pdetail); 

useEffect(()=>{
    console.log(location.state.params);
    console.log(location.state.params.totalFare);
},[])


var [ticket,setTicket] = useState({});
var [disableBookBtn, setDisableBookBtn] = useState(false);

const bookTicket = ()=>
{
    debugger;
    var token = sessionStorage.getItem("token")
    var emailclass = {
        email :sessionStorage.getItem("email"),
        flightClass:sessionStorage.getItem("class")
    }
    axios.post("http://localhost:5050/user/bookticket/"+location.state.params.flightid,emailclass,
    {headers:{"Authorization":"Bearer "+token}}).then(
        (result)=>{
            console.log(result.data)
            setTicket(result.data);
        }
    )
    setDisableBookBtn(true);
}
    return(<>
    
    <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Aadhar</th>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Gender</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Mobile No.</th>
                            <th scope='col'>Luggage(kgs)</th>
                            <th scope='col'>Meal Name</th>
                            <th scope='col'>Seat No</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {passengerlist.map(pass=>{
                            return(
                                <tr value={pass.aadhar}>
                                    <td>{pass.aadhar}</td>
                                    <td>{pass.fname}</td>
                                    <td>{pass.lname}</td>
                                    <td>{pass.gender}</td>
                                    <td>{pass.age}</td>
                                    <td>{pass.mobile}</td>
                                    <td>{pass.luggage}</td>
                                    <td>{pass.meal.name}</td>
                                    <td>{pass.seatno}</td>
                                   
                                </tr>
                            )
                        })}
                        <tr>
                            <td>
                                <h3>Total Fare:</h3><b>(without GST & Discounts)</b>
                            </td>
                            <td>
                                <h3>{location.state.params.totalFare}</h3>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </MDBTableBody>
                </MDBTable>
                <hr></hr>
                <MDBTable>
                    <MDBTableHead>
                    <tr>
                        <th style={{columnSpan:4}}>
                        Source: {ticket.source}
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style={{columnSpan:4}}>
                        Destination: {ticket.destination}
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Number of seats</th>
                        <th>GST(%)</th>
                        <th>Discount(%)</th>
                        <th>Total Price</th>
                    </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>{ticket.seats}</td>
                            <td>{ticket.gst}</td>
                            <td>{ticket.discount}</td>
                            <td>{ticket.totalprice}</td>
                        </tr>
                        </MDBTableBody>
                </MDBTable>            
               <center><MDBCardBody>
                    <Button 
                    sx={{m:2}}
                    onClick={bookTicket}
                    disabled={disableBookBtn} 
                    variant="contained">
                        Book Ticket</Button>
                </MDBCardBody></center>    

    
    </>
    )

}

export default BookTicket;