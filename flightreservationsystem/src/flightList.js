import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Axios } from "axios";
import { useHistory, useLocation } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function FlightList(props)
{
    
    var history = useHistory();
    var location = useLocation();
    console.log(location.state.params);
    var [flightList, setFlightList] = useState([]);
    

    useEffect(()=>{
        var stateee = location.state.params;
        debugger
        axios.post("http://localhost:5050/user/allflightswithdoj",stateee)
                .then((result)=>{setFlightList(result.data);
                    console.log(result.data)
            })
        
    },[]);
    var bookedFlight = (flight)=>{
        if(sessionStorage.getItem("email")!=null){
            var Tfare = flight.businessPrice+flight.firstclassPrice+flight.economyPrice;

            var token = sessionStorage.getItem("token");
            axios.post("http://localhost:5050/user/selectedflight",flight,
            {headers:{"Authorization":"Bearer "+token}})
            .then((result)=>{
                debugger
                var bookThisFlight = result.data;

                var forwardFlightWithFare = {flight:bookThisFlight,
                                             fare:Tfare};

                    history.push('/addPassenger', {params:forwardFlightWithFare})
            })
        }
        else{
            history.push('/signin',{params:location.state.params})
        }
        
    }
    // console.log(flightList);
    return (<>
        <center> 
          <h1>List of flights</h1>
         </center>  
        <hr></hr>
        <center>
           <div className="table table-responsive">
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Source</td>
                        <td>Destination</td>
                        <td>Date of Journey</td>
                        <td>Arrival Time</td>
                        <td>Departure Time</td>
                        <td>Fare</td>
                    </tr>
        {
            flightList.map(flight=> 
                {
                    return (
                 <tr key={flight.id}>
                    <td>{flight.source} </td>
                    <td>{flight.destination}</td>
                    <td>{flight.doj}</td>
                    <td>{flight.arrivalTime}</td>
                    <td>{flight.departureTime}</td>
                    <td>{flight.businessPrice+
                           flight.firstclassPrice+
                           flight.economyPrice}</td>
                    <td><button onClick={()=>{
                        bookedFlight(flight)
                    }}>Book Now</button></td>
                   </tr>
                   )
                })
                }
                </tbody>
                </table>
                </div>
                </center>
                </>);
        }

export default FlightList;



