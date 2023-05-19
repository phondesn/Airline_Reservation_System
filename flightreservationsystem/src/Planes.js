import axios from "axios";
import { useState,useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import UpdatePlane from "./UpdatePlane"


function Planes()
{
    
    var history = useHistory();
    var [planes,setPlanes] = useState([]);
    var [plane,setplane]  = useState({planeCode: "", built: "", economyClassSeats:0, businessClassSeats:0, firstClassSeats:0});
    useEffect(()=>{
        var token = sessionStorage.getItem("token")
        axios.get("http://localhost:5050/aeroplane",{headers:{"Authorization" : "Bearer " +token}})
        .then((res)=>{setPlanes(res.data)})

    },[])

    var HandleChange=(args)=>{
        var copyOfPlane = {...plane};
        copyOfPlane[args.target.name] = args.target.value;
        setplane(copyOfPlane);
    }

    var Add=()=>{
        debugger
        var token = sessionStorage.getItem("token");
        axios.post("http://localhost:5050/aeroplane",{
            planeCode : plane.planeCode,
            built: plane.built,
            economyClassSeats:plane.economyClassSeats,
            businessClassSeats:plane.businessClassSeats,
            firstClassSeats:plane.firstClassSeats
            
        },{headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
            var copyOfPlane = [...planes]
            copyOfPlane.push(result.data)
            setPlanes(copyOfPlane)
            history.push('/planes');

        })
    }
var Update=(code)=>{
   
    history.push('/updateplane',{params:code})
}

var Addflight=(code)=>{
    
    history.push('/addflight',{params:code})
}

    return(<div className='table-responsive'>
        <center>
                <table className="table table-bordered registerTable">
                    <tbody>
                        <tr>
                            <td>
                                Plane Code:
                            </td>
                            <td>
                                <input type = {"text"} name = "planeCode"
                                        value={plane.planeCode}
                                        onChange={HandleChange}/>
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
                                    <button className="btn btn-primary"
                                            onClick={Add}>
                                                Add Plane
                                            </button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </center>

    <table className="table table-hover content">
        <tbody>
            <tr>
                <td>Plane Code</td>
                <td>Manufacturer</td>
                <td>Economy-Class Seats</td>
                <td>Business-Class Seats</td>
                <td>First-Class Seats </td>
            </tr>
            {
                
                planes.map(plane=>{
                    return(<tr key={plane.planeCode}>
                            <td>{plane.planeCode}</td>
                            <td>{plane.built}</td>
                            <td>{plane.economyClassSeats}</td>
                            <td>{plane.businessClassSeats}</td>
                            <td>{plane.firstClassSeats}</td>
                            <td>
                                <button className="btn btn-success"
                                        onClick=
                                        {
                                            ()=>{
                                                    Update(plane.planeCode)
                                                }
                                        }>
                                    Update
                                    </button>
                            </td>
                            <td>
                                <button className="btn btn-primary"
                                        onClick=
                                        {
                                            ()=>{
                                                    Addflight(plane.planeCode)
                                                }
                                        }
                                    >Add Flight</button>
                            </td>
                            </tr>)
                })
            }
        </tbody>
    </table>
</div>);

}

export default Planes;