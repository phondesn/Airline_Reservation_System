import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function ListOfFeedback(){
    var [feedback,setfeedback] = useState([]);
    var location  = useLocation();
    useEffect(()=>{
            var token = sessionStorage.getItem("token")
        axios.post("http://localhost:5050/user/allfeedbacks",{
            email:location.state.params
        },{headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
            setfeedback(result.data);
        })
    },[])
    return <div className="table table-responsive">
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Email</td>
                </tr>
                {feedback.map((f)=>{
                        return <tr key={f.id}>
                                <td>{f.title}</td>
                                <td>{f.description}</td>
                                <td>{f.email}</td>
                        </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default ListOfFeedback;