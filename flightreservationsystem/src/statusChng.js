import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function StatChange(){

    var location = useLocation();
    var history = useHistory();

    var [status, setStatus] = useState("");
    var [mesg,setmesg] = useState("");

    var [compId,setcompId] = useState(location.state.params)
    var [url] = useState("")

    var HandleChange = (args)=>{
        debugger
        var copy = args.target.value;
        setStatus(copy);
        console.log(status);
    }

    var changeStts = ()=>{
        console.log(status);
        debugger
        url = "http://localhost:5050/crm/complaints/"+compId;
        var token = sessionStorage.getItem("token")
        axios.post(url,{
            status:status
        },{headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
                setmesg(result.data)
                history.push("/crmcomplaints")
        }).catch((result)=>{
            setmesg("Error in changing roles")
        })
    }

    useEffect(()=>{
            setTimeout(()=>{
                setmesg("")
            },5000)
    },[mesg])
    
    return (<>

    <center>
        <div>
        <button onClick={changeStts}>Change Status</button>
        <br></br><br></br>
        <select name="status" id="status" onChange={HandleChange}>
        <option value="undefined">Select Status</option>
        <option value="NEW">New</option>
        <option value="INPROCESS">In Process</option>
        <option value="FULFILLED">Fulfilled</option>
        </select>
        <h1 style={{color:"green"}}>{mesg}</h1>
        </div>
    </center>
    </>)
}

export default StatChange;