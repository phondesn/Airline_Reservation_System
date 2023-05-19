import axios from "axios";
import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
/*flight id , arrival time , departure time , source , destination , date of journey , business class seats , economy class seats ,
firstclass seats , business price , economy price , firtclass price */
function Flights()
{
    var history = useHistory();
    var [flights,setflights] = useState([]);

    useEffect(()=>{
        var token = sessionStorage.getItem("token");

        axios.get("http://localhost:5050/flights",{headers:{"Authorization" : "Bearer " +token}})
        .then((res)=>{setflights(res.data)})
    },[])

    var Addflight=()=>{
        history.push('/addflight')
    }

    var Update=(flight)=>{
            history.push('/updateflight',{params:flight})
    }


    return(<div className='table-responsive'>
        <table className="table table-hover content">
            <tbody>
                <tr>
                    <td>Flight Number</td>
                    <td>Arrival Time</td>
                    <td>Departure Time</td>
                    <td>Source</td>
                    <td>Destination</td>
                    <td>Date of Journey</td>
                    <td>Bussiness Seats</td>
                    <td>Economy Seats</td>
                    <td>firstclass Seats</td>
                    <td>Bussiness Seat Price</td>
                    <td>Economy Seats Price</td>
                    <td>FirstClass Seats Price</td>
                </tr>
                {
                    
                    flights.map(flight=>{
                        return(<tr key={flight.id}>
                                <td>{flight.id}</td>
                                <td>{flight.arrivalTime}</td>
                                <td>{flight.departureTime}</td>
                                <td>{flight.source}</td>
                                <td>{flight.destination}</td>
                                <td>{flight.doj}</td>
                                <td>{flight.businessClassSeats}</td>
                                <td>{flight.economyClassSeats}</td>
                                <td>{flight.firstClassSeats}</td>
                                <td>{flight.businessPrice}</td>
                                <td>{flight.economyPrice}</td>
                                <td>{flight.firstclassPrice}</td>
                                <td>
                                    <button className="btn btn-success"
                                            onClick=
                                            {
                                                ()=>{
                                                    Update(flight)
                                                }
  
                                            }
                                            >Update</button>
                                </td>
                                </tr>)
                    })
                }    
            </tbody>
        </table>
    </div>);
}

export default Flights;