import axios from "axios";
import React, {useEffect, useState} from "react";
import { Button, Table} from "@mui/material";
import { Link} from "react-router-dom";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ShowTicketsToUser(params) {
    const [allTickets, setallTickets] = useState([])
        var send = {email:sessionStorage.getItem("email")};
        function getTickets() {
            var token = sessionStorage.getItem("token")
            axios.post("http://localhost:5050/user/ticket", send, {headers:{"Authorization" : "Bearer " +token}})
            .then(result => result.data)
            .then((result) => {
                setallTickets(result)
            //   debugger;
              console.log(result);
            });
        }
    useEffect(()=>{
        getTickets();
    },[]);

    function logOut() {
        sessionStorage.removeItem("email");
    }

    return (<>
        <Button variant="contained" color="inherit" sx={{m:2}}><Link to={"/userdashboard"}>Back</Link></Button>    
        <Button variant="contained" color="inherit" ><Link to={"/signin"} onClick={logOut}>LogOut</Link></Button>
        <center> 
          <h3>Tickets</h3> 
        <hr></hr>
          <div>
            <Table border={2} text-align="center">
            <TableHead>    
                <TableRow>
                    <TableCell>Ticket Id</TableCell>
                    <TableCell>No. of passangers</TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                {allTickets.map(ticket=>
                {return (<>
                    <TableRow><TableCell key={ticket.id}>
                    {ticket.id}
                    </TableCell>
                    <TableCell>
                    {ticket.seats}
                    </TableCell></TableRow>
                </>)})}                
            </TableBody>
            </Table>
          </div></center> 
      </>);
}

export default ShowTicketsToUser;
