import axios from "axios";
import React, {useEffect, useState} from "react";
import { Button} from "@mui/material";
import { Link} from "react-router-dom";
import { useHistory,useLocation } from "react-router-dom";



function ShowFeedbackListToUser () {
  
  var navigate = useHistory();
  var location = useLocation();
  var [fetchedEmail,setFetchedEmail] = useState(location.state.params);
  const [allFeedbacks, setallFeedbacks] = useState([]);
 
 
    function getFeedbacks() {
      debugger;
      var token = sessionStorage.getItem("token")
      var send = {email:sessionStorage.getItem("email")};
      
        // console.log(send);
        axios.post("http://localhost:5050/user/allfeedbacks", send, {headers:{"Authorization" : "Bearer " +token}})
        .then(result => result.data)
        .then((result) => {
          setallFeedbacks(result)
        //   debugger;
          console.log(result);
        });
      }
    
     
      useEffect(()=>{
        getFeedbacks();
    },[]);

    function logOut() {
      sessionStorage.removeItem("email");
  }

 return (<>
 
        <Button variant="contained" color="inherit" sx={{m:2}}><Link to={"/userdashboard"}>Back</Link></Button>    
        <Button variant="contained" color="inherit" ><Link to={"/signin"} onClick={logOut}>LogOut</Link></Button>
        <center> 
          <h3>Feedbacks</h3> 
        <hr></hr>
          <div>
            <Button variant="contained" color="inherit" sx={{m:2}}><Link to={"/addfeedbackbyuser"}>Add Feedback</Link></Button>    
            <table border={2} text-align="center">
            <thead>    
                <tr>
                    <th key={1}>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody >
                {allFeedbacks.map(feedback=>
                {return (<>
                    <tr><td key={feedback.id}>
                    {feedback.title}
                    </td><td>
                    {feedback.description}
                    </td></tr>
                </>)})}                
            </tbody>
            </table>
          </div></center> 
      </>);
  }
export default ShowFeedbackListToUser;
