import axios from "axios";
import { useHistory,useLocation } from "react-router-dom"
import { useState } from "react";

function Updateflight()
{
    var history = useHistory();
    var location = useLocation();

    var [flight,setflight]  = useState({id:location.state.params.id, 
        arrivalTime:location.state.params.arrivalTime, 
        departureTime:location.state.params.departureTime,
        source:location.state.params.source,
        destination:location.state.params.destination,
        doj:location.state.params.doj,
        businessPrice:location.state.params.businessPrice,
        economyPrice:location.state.params.economyPrice,
        firstclassPrice:location.state.params.firstclassPrice});
    

    var HandleChange=(args)=>{
        debugger;
        var copyOfFlight = {...flight};
        copyOfFlight[args.target.name] = args.target.value;
        setflight(copyOfFlight);
    }

    var Update=()=>{
        debugger;
        var token = sessionStorage.getItem("token");
        var url = "http://localhost:5050/flights/"+location.state.params.id;
        axios.put(url,{
            arrivalTime:flight.arrivalTime,
            departureTime:flight.departureTime,
            source:flight.source,
            destination:flight.destination,
            doj:flight.doj,
            businessPrice:flight.businessPrice,
            economyPrice:flight.economyPrice,
            firstclassPrice:flight.firstclassPrice},
            {headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
            history.push('/flights');
        })
    }

    return(<div>
        <center>
                 <table className="table table-bordered registerTable">
                     <tbody>
                         <tr>
                             <td>
                                 Flight Id:
                             </td>
                             <td>
                                 <input type = {"number"} name = "id" disabled={true}
                                         value={location.state.params.id}/>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 Arrival Time:
                             </td>
                             <td>
                             <input type = {"text"} name = "arrivalTime"
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
                                <input type={"date"} name="doj"
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
                            <td colSpan={2}>
                                <center>
                                    <button className="btn btn-success"
                                            onClick={Update}>
                                                Update Flight
                                            </button>
                                </center>
                            </td>
                        </tr>
                     </tbody>
                 </table>
             </center>
         </div>);

}

export default Updateflight