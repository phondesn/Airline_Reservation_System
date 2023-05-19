import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

function UpdatePlane(props){
    var history = useHistory();
    var [plane,setplane]  = useState({planeCode: "", built: "", economyClassSeats:0, businessClassSeats:0, firstClassSeats:0});
    var location = useLocation();
    
    var HandleChange=(args)=>{
        var copyOfPlane = {...plane};
        copyOfPlane[args.target.name] = args.target.value;
        setplane(copyOfPlane);
    }

    var Update=()=>{
        var token = sessionStorage.getItem("token");
        var url = "http://localhost:5050/aeroplane/"+location.state.params;
        axios.put(url,{
            built: plane.built,
            economyClassSeats:plane.economyClassSeats,
            businessClassSeats:plane.businessClassSeats,
            firstClassSeats:plane.firstClassSeats
 
        },{headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
            history.push('/planes');
        })
    }


    return(<div>
       <center>
                <table className="table table-bordered registerTable">
                    <tbody>
                        <tr>
                            <td>
                                Plane Code:
                            </td>
                            <td>
                                <input type = {"text"} name = "planeCode"
                                        value={location.state.params}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Manufacturer:
                            </td>
                            <td>
                            <input type = {"text"} name = "built"
                                        value={plane.built}
                                        onChange={HandleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Economy-Class Seats:
                            </td>
                            <td>
                                <input type = {"number"} name="economyClassSeats"
                                        value={plane.economyClassSeats}
                                        onChange={HandleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Business-Class Seats:
                            </td>
                            <td>
                                <input type = {"number"} name="businessClassSeats"
                                        value={plane.businessClassSeats}
                                        onChange={HandleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                First-Class Seats:
                            </td>
                            <td>
                                <input type = {"number"} name="firstClassSeats"
                                        value={plane.firstClassSeats}
                                        onChange={HandleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <center>
                                    <button className="btn btn-success"
                                            onClick={Update}>
                                                Update Plane
                                            </button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>);
}

export default UpdatePlane;