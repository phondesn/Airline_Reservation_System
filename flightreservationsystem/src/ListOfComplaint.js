import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function ListOfComplaint(){
    var [complaints,setcomplaints] = useState([])

    var location  = useLocation();
    useEffect(()=>{
        var token = sessionStorage.getItem("token");
        axios.post('http://localhost:5050/user/allcomplaints', {
            email: location.state.params
          },{headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
            setcomplaints(result.data);
          })
    },[])

    return <div className="table table-responsive">
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td>Ticket Title</td>
                    <td>Ticket Description</td>
                    <td>Ticket Status</td>
                </tr>
                {complaints.map(c=>{
                   return ( <tr>
                    <td>{c.title}</td>
                    <td>{c.description}</td>
                    <td>{c.status}</td>
                </tr>)
                })}
            </tbody>
        </table>
    </div>
}

export default ListOfComplaint;