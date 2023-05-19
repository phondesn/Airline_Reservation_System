import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

function Addflight()
{
    var location = useLocation();
    var history = useHistory();
    var [flight,setflight] = useState({source:"",
                                        arrivalTime:"",
                                        departureTime:"",
                                        destination:"",
                                        layoverLocation:"",
                                        layoverDuration:"",
                                        doj:"",
                                        economyPrice:"",
                                        businessPrice:"",
                                        firstclassPrice:"",
                                        plane:location.state.params
                                        });
    
    

    var HandleChange=(args)=>{
        debugger
    var copyOfFlight = {...flight};
    copyOfFlight[args.target.name] = args.target.value;
    setflight(copyOfFlight);
    }
    
    // var HandleDateChange=(args)=>{
    //     debugger
    //     // format(args.target.value, 'yyyy-mm-dd')
    //     var copyOfFlight = {...flight};
    //     var dd = args.target.value;
    //     var date = format(dd, 'yyyy-mm-dd')
    //     copyOfFlight[args.target.name] = date;
    //     setflight(copyOfFlight);
    //     console.log(date);
    //     console.log(flight);
    // }
    
    var Flight=()=>{
       debugger
       var token = sessionStorage.getItem("token")
        axios.post("http://localhost:5050/flights", flight, {headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
            console.log(result.data)
            history.push('/flights');
        })
 }    
                                        
     return(<div className="table table-responsive">
        <center>
            <table className="table table-bordered registerTable">
                <tbody>
                    <tr>
                        <td>
                            Plane Code:
                        </td>
                        <td>
                            <input type = "text" name = "plane"
                            value={flight.plane}/>
                         </td>
                    </tr>
                    <tr>
                            <td>
                                 Arrival Time:
                            </td>
                             <td>
                             <input type = {"text"} name="arrivalTime"
                                         value={flight.arrivalTime}
                                         onChange={HandleChange}/>
                             </td>
                    </tr>
                    <tr>
                             <td>
                                 Departure Time:
                             </td>
                             <td>
                                 <input type = {"text"} name="departureTime"
                                         value={flight.departureTime}
                                         onChange={HandleChange}/>
                             </td>
                    </tr>
                    <tr>
                        <td>
                             Source:
                         </td>
                        <td>
                            <input type = {"text"} name="source"
                                    value={flight.source}
                                     onChange={HandleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                             Destination:
                         </td>
                        <td>
                         <input type = {"text"} name="destination"
                                 value={flight.destination}
                                 onChange={HandleChange}/>
                        </td>
                     </tr>
                     <tr>
                        <td>
                             Date of Journey:
                        </td>
                        <td>
                            <input type={'date'} name="doj"
                                    value={flight.doj}
                                    
                                    onChange={HandleChange}/>
                         </td>
                     </tr>
                     <tr>
                        <td>
                            Business Seat Price:
                        </td>
                        <td>
                            <input type={"number"} name="businessPrice"
                                    value={flight.businessPrice}
                                    onChange={HandleChange}/>
                            </td>
                    </tr>
                    <tr>
                            <td>
                                Economy Seat Price:
                            </td>
                            <td>
                                <input type={"number"} name="economyPrice"
                                        value={flight.economyPrice}
                                        onChange={HandleChange}/>
                            </td>
                         </tr>
                         <tr>
                            <td>
                                FirstClass Seat Price:
                            </td>
                            <td>
                                <input type={"number"} name="firstclassPrice"
                                        value={flight.firstclassPrice}
                                        onChange={HandleChange}/>
                            </td>
                         </tr>
                         <tr>
                             <td>
                                 Layover Duration:
                             </td>
                             <td>
                                 <input type = {"text"} name="layoverDuration"
                                         value={flight.layoverDuration}
                                         onChange={HandleChange}/>
                             </td>
                    </tr>
                    <tr>
                             <td>
                                 Layover Location:
                             </td>
                             <td>
                                 <input type = {"text"} name="layoverLocation"
                                         value={flight.layoverLocation}
                                         onChange={HandleChange}/>
                             </td>
                    </tr>
                         <tr>
                            <td colSpan={2}>
                                <center>
                                    <button className="btn btn-success"
                                            onClick={Flight}>
                                                Add Flight
                                            </button>
                                </center>
                            </td>
                        </tr>
                </tbody>
            </table>
         </center>   
     </div>)
}

export default Addflight;