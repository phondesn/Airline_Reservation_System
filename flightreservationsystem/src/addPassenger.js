import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";


function AddPassenger () 
{
    var location = useLocation();
    var history = useHistory();
    const receivedData = location.state.params;

    const handleAddPassenger = () =>
    {
        history.push("/passengerDetails", {params:receivedData});
    }
    return(
        <>
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
                    <tr key={receivedData.flight.id}>
                    <td>{receivedData.flight.source} </td>
                    <td>{receivedData.flight.destination}</td>
                    <td>{receivedData.flight.doj}</td>
                    <td>{receivedData.flight.arrivalTime}</td>
                    <td>{receivedData.flight.departureTime}</td>
                    <td>{receivedData.fare}</td>
                   </tr>
                    </tbody>
                </table>
                        <center>
                            <button onClick={handleAddPassenger}>Add Passengers</button>
                        </center>

                </div>
        </>
    )
}

export default AddPassenger;