import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import { Data } from "./showuserdetails";
import Select from '@mui/material/Select';




function UpdateUserProfile() {
    var [send] = useState()
    var [mesg,setmesg] = useState();

    var history = useHistory();

    //Getting data from database
    var [userDetails, setUserDetails] = useState([{firstName:"",lastName:"",email:"",password:"", role:"", dob:"", mobile:"", gender:""}])
    var send = {email:sessionStorage.getItem("email")};
    // debugger;
    useEffect(()=>{
      var token = sessionStorage.getItem("token")
        axios.post("http://localhost:5050/user/userDetails",send, {headers:{"Authorization" : "Bearer " +token}})
            .then(result => result.data)
            .then((result) => {
              // debugger;
                setUserDetails(result)
                // debugger;
                
            })
    },[]);
    // console.log(userDetails);

    function handleChange(args) {
        // debugger;
        var copy ={...userDetails}
        copy[args.target.name] = args.target.value;
        setUserDetails(copy)
    }
    // console.log(userDetails);
    var updateUser = (userDetails) =>{
        axios.put("http://localhost:5050/user/updateUser",userDetails)
            .then((updatedResult)=>{
                        setmesg(updatedResult.data);
            })
            history.push('/showuserdetails');
        };
        // console.log("User  : "+userDetails.gender);

        function logOut() {
            sessionStorage.removeItem("email");
        }

    return(<>
        <Button variant="contained" color="inherit" sx={{m:2}}><Link to={"/showuserdetails"}>Back</Link></Button>
        <Button variant="contained" color="inherit" ><Link to={"/signin"} onClick={logOut}>LogOut</Link></Button>
        <center>
        <h3>Update profile here</h3>
        <hr></hr>
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off">
        <div>
              <TextField 
            //   key={userDetails.id}
            //   defaultValue={userDetails.firstName}
                value={userDetails.firstName}
              required
              name="firstName"
              id="outline-fname" onChange={handleChange}/><br/>
              <TextField
            //   defaultValue={userDetails.lastName}        
              value={userDetails.lastName}
              required
              name="lastName"
              id="outline-lname" onChange={handleChange}/><br/>
              <TextField
            //   defaultValue={userDetails.email}
              value={userDetails.email}
              disabled
              name="email"
              id="outline-email" onChange={handleChange}/><br/>
              <TextField
            //   defaultValue={userDetails.dob}
              value={userDetails.dob}
              type="date"
              required
              name="dob"
              id="outline-dob" onChange={handleChange}
              /><br/>
              {/* <DatePicker */}
{/* //   label={'"year", "month" and "day"'}
//   views={['year', 'month', 'day']}
// /><br/> */}
              <TextField
            //   defaultValue={userDetails.mobile}
              value={userDetails.mobile}
              required
              name="mobile"
              id="outline-mobile" onChange={handleChange}/><br/>
              <FormControl required sx={ {m:2, minWidth: 120}}>
              <InputLabel id="outline-inutlable-gender">Gender</InputLabel>
              <Select
            //   defaultValue={userDetails.gender}
              value={userDetails.gender}
              disabled
              id="outline-gender"
              name="gender"
              label="Gender" onChange={handleChange}>
                <MenuItem value={"M"}>Male</MenuItem>
                <MenuItem value={"F"}>Female</MenuItem>
                <MenuItem value={"O"}>Others</MenuItem>
              </Select>
              </FormControl><br/>
              <Link></Link>
              <Button variant="contained" color="inherit" sx={{marginTop:2, marginBottom:2}} onClick={()=>updateUser(userDetails)}>Update</Button>
              <Button variant="contained" color="inherit" sx={{marginLeft:4, marginTop:2, marginBottom:2}}><Link to={"/showuserdetails"}>Cancel</Link></Button>
        
        </div>  
        </Box>
        </center>
    </>)
    
};
export default UpdateUserProfile;
