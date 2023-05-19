import { useEffect, useState } from "react";
import { Button, Fab, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { Business } from "@mui/icons-material";

function PassengerDetails() {
var location = useLocation();
var history = useHistory();
var passsengerCount = 2 ;

const [trvClass, setTrvClass] = useState(sessionStorage.getItem("class"));
// const [trvClassInTag, setTrvClassInTag] = useState("");



useEffect(()=>{
    debugger;
    axios.get("http://localhost:5050/meals/"+location.state.params.flight.id).
    then((result)=>{
    setMeals(result.data);
    console.log(result.data)})

    // if (trvClass == "BUS") {
    //     debugger
    //     setTrvClassInTag("Business")
    //     console.log(trvClassInTag);
    // } else {
    //     if (trvClass == "FIR") {
    //         setTrvClassInTag("First Class")
    //         console.log(trvClassInTag);
    //     } else {
    //         setTrvClassInTag("Economy")
    //         console.log(trvClassInTag);
    //     }  
    // }

},[])

    var [showConfirmPassengerBtn, setShowConfirmPassengerBtn] = useState(true);
    var [maxPassenger, setMaxPassenger] = useState(true);

    var [flight, setFlight] = useState({id:location.state.params.flight.id, 
                                        source:location.state.params.flight.source, 
                                        destination:location.state.params.flight.destination, 
                                        doj:location.state.params.flight.doj,
                                        fare:location.state.params.fare
                                    })
    
    var [passenger, setPassenger] = useState({fname:"",
                                                lname:"",
                                                gender:"",
                                                aadhar:"",
                                                age:"",
                                                mobile:"",
                                                luggage:"",
                                                seatClass:"",
                                                meal:{
                                                    id:"",
                                                    name:"",
                                                    category:"",
                                                    subCategory:""
                                                },
                                                seatno:"",
                                                travellerClass:""})

        // var [newpassenger, setNewPassenger] = useState({fname:"",
        //             lname:"",
        //             gender:"",
        //             aadhar:"",
        //             age:"",
        //             mobile:"",
        //             luggage:"",
        //             meal:{
        //                 id:"",
        //                 name:"",
        //                 category:"",
        //                 subCategory:""
        //             },
        //             seatno:"",
        //             travellerClass:""})

        // var [inputPassenger, setInputPassenger] = useState({});
        
    var [passengerlist, setPassengerlist] = useState([])
    // const [sendThisList, setSendThisList] = useState([]);
    var [receivedPassenger,setReceivedPassenger] = useState([]);
    var [meals, setMeals] = useState([]) //have to fetch using useEffect

    var handleChange = (args) =>{
                                    var copy = {...passenger}
                                    copy[args.target.name] = args.target.value;
                                    setPassenger(copy);
                                    console.log(passenger);
                                    debugger;
                                }

    // var handleChange = (args) =>{
    //                                 var copy = {...passenger}
    //                                 copy[args.target.name] = args.target.value;
    //                                 setPassenger(copy);
    //                                 debugger;
    // }
    var addPassenger = () =>{
            // ++passsengerCount;
            // console.log(passsengerCount);
            
            debugger
            if (passengerlist.length<4) {
                var copy = [...passengerlist];
                var copyOfPassenger = {...passenger};
                copyOfPassenger["seatClass"]=sessionStorage.getItem("class");
                copyOfPassenger["travellerClass"]=sessionStorage.getItem("class");
            copy.push(copyOfPassenger);
            console.log(copy);
            // setSendThisList(copy);
            // console.log(sendThisList);
            setPassengerlist(copy);
            console.log(passengerlist);
            console.log(passengerlist.length);
            setShowConfirmPassengerBtn(false);
            setMaxPassenger(true);
            } else {
                console.log("Can only add 4 passengers at a time")
                console.log(passengerlist.length)
                setMaxPassenger(false);
            }
            



                // debugger;
                // var copyofPassenger = {...passenger}
                // passenger["meal"] = {
                //                         id:"",
                //                         name:"",
                //                         category:"",
                //                         subCategory:""
                //                     }
                // passenger["travellerClass"] = sessionStorage.getItem("class");
                // passenger["seatClass"] = sessionStorage.getItem("class");
                //                 var pass = passenger;
                //                 var token = sessionStorage.getItem("token")
                                   
                //                 var copyThis = [...sendThisPassengerList]
                //                 copyThis.push(passenger)
                //                 console.log(copyThis)
                //                  setSendThisPassengerList(copyThis)
                //                  console.log(sendThisPassengerList)   
                                
                                
    // axios.post("http://localhost:5050/user/passengerdetails/"+flight.id, pass, {
    //     headers:{"Authorization":"Bearer "+token}
    // }).then((result)=>{
        
    //     setPassengerlist(result.data)
    //     var copy = [...receivedPassenger]
    //     copy.push(passengerlist);
    //     setReceivedPassenger(copy) 
    //     console.log(receivedPassenger)       
    // })

    }
    
    var [forwardThisPassengerList, setForwardThisPassengerList] = useState([]); 
    var confirmPassengerBtn = () =>
    {debugger
        var token = sessionStorage.getItem("token");
        axios.post("http://localhost:5050/user/passengerDetailsList/"+location.state.params.flight.id, passengerlist,
        {headers:{"Authorization":"Bearer "+token}}
        )
        .then((result)=>{
            var copy = result.data;
            var noOfPassengers = passengerlist.length;
            var fare = flight.fare;
            var tFare = noOfPassengers*fare;
            console.log(tFare);
            console.log(noOfPassengers);
            console.log(fare);
            var detail = {pdetail:copy,flightid:location.state.params.flight.id,totalFare:tFare}
            // setForwardThisPassengerList(copy)
             history.push("/bookTicket", {params:detail})
        })
    }
    
    var removePassenger = (args) =>{
                                        debugger;
                                        var copy = []
                                    passengerlist.map(eachPassenger=>{
                                        if(args != eachPassenger.aadhar){
                                            copy.push(eachPassenger)
                                        }
                                    })
                                    setPassengerlist(copy);
                                    console.log(passengerlist.length)
                                    if (passengerlist.length<5) {
                                        setMaxPassenger(true);
                                    } else {
                                        setMaxPassenger(false);
                                    }

                                    debugger;
    }

    // var handleChangeOnMeal = () =>
    // {

    // }
    return ( 
        <Stack>
        <Stack>
            <MDBCard className='text-black m-2' style={{borderRadius: '25px',padding:'10px'}} class='col-md-8'>
                <Stack direction='row' spacing={2}>
                    <TextField
                        required
                        id="flightId"
                        label="Flight Id"
                        defaultValue={flight.id}
                        name='id'
                        color="secondary" focused
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        required
                        id="idSource"
                        label="Source"
                        defaultValue={flight.source}
                        name='source'
                        color="secondary" focused
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        required
                        id="idDestination"
                        label="Destination"
                        defaultValue={flight.destination}
                        name='destination'
                        color="secondary" focused
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        required
                        id="idDoj"
                        label="Date of journey"
                        defaultValue={flight.doj}
                        name='doj'
                        color="secondary" focused
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        required
                        id="idClass"
                        label="Traveller Class"
                        defaultValue={trvClass}
                        name='trvClass'
                        color="secondary" focused
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        required
                        id="idFare"
                        label="Fare"
                        defaultValue={flight.fare}
                        name='fare'
                        color="secondary" focused
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                </Stack>
            </MDBCard>
        </Stack>
        <Stack>
            <MDBCard className='text-black m-2' style={{borderRadius: '25px',padding:'10px'}} alignment='center'>
                <MDBCardTitle>
                    <Fab variant="extended" style={{backgroundColor:'maroon', color:'white'}}>
                        PASSENGER DETAILS
                    </Fab>
                </MDBCardTitle>
                <Stack direction='row' spacing={2} padding='4px'>
                <TextField
                    required
                    id="idFirstName"
                    label="First Name"
                    value={passenger.fname}
                    onChange={handleChange}
                    name='fname'
                />
                <TextField
                    required
                    id="idLastName"
                    label="Last Name"
                    value={passenger.lname}
                    onChange={handleChange}
                    name='lname'
                />
                <TextField
                    inputProps={{ maxLength:12 }}
                    required
                    id="idAadhar"
                    label="Aadhar"
                    value={passenger.aadhar}
                    onChange={handleChange}
                    name='aadhar'
                />
                <TextField
                    required
                    id="idAge"
                    label="Age"
                    value={passenger.age}
                    onChange={handleChange}
                    name='age'
                />
                </Stack>
                <Stack direction='row' spacing={2} padding='4px'>
                <TextField
                    inputProps={{ maxLength:10 }}
                    maxLength={10}
                    required
                    id="idMobile"
                    label="Mobile"
                    type="number"
                    value={passenger.mobile}
                    onChange={handleChange}
                    name='mobile'
                />
                <TextField
                    required
                    id="idLuggage"
                    label="Luggage Weight (kgs)"
                    type="number"
                    value={passenger.luggage}
                    onChange={handleChange}
                    name='luggage'
                />
                <TextField
                    required
                    id="idSeatNo"
                    label="Seat No"
                    type="number"
                    value={passenger.seatno}
                    onChange={handleChange}
                    name='seatno'
                />
                <FormControl sx={{ m: 1, minWidth: 230 }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={passenger.gender}
                  label="Gender"
                  name='gender'
                  onChange={handleChange}>
                    <MenuItem value={'M'}>Male</MenuItem>
                    <MenuItem value={'F'}>Female</MenuItem>
                    <MenuItem value={'O'}>Other</MenuItem>
                  </Select>
              </FormControl>
              </Stack>
              <Stack direction='row' spacing={2} padding='1px'>
              {/* <Stack direction='row'> */}
              {/* <FormControl sx={{ m: 1, minWidth: 230 }}>
                            <InputLabel id="demoClass">{passenger.travellerClass}</InputLabel>
                            <Select
                            labelId='demoClass'
                            id='idClass'
                            value={passenger.travellerClass}
                            disabled={true}
                            label={passenger.travellerClass}
                            name='travellerClass'>
                            </Select>
                </FormControl> */}
                {/* </Stack> */}
                <Stack direction='row'>
                <FormControl sx={{ m: 1, minWidth: 230 }}>
                            <InputLabel id="demoMeal">Meal</InputLabel>
                            <Select
                            labelId='demoMeal'
                            id='idMeal'
                            value={passenger.meal}
                            label="Meal"
                            name='meal'
                            onChange={handleChange}>
                                {meals.map(selMeal=>{
                                    return(
                                        <MenuItem value={{id:selMeal.id,
                                        name:selMeal.name,
                                        category:selMeal.category,
                                        subCategory:selMeal.subCategory}}>{selMeal.name}</MenuItem>
                                    )
                                })}
                            </Select>
                </FormControl>
              </Stack>
                </Stack>
                <MDBCardBody>
                    <Button variant="contained" onClick={addPassenger}>ADD PASSENGER</Button>
                    <Fab
                    hidden={maxPassenger}
                     variant="extended" style={{backgroundColor:'maroon', color:'white', marginLeft:10}}>
                        Can only add upto 4 passengers at a time.
                    </Fab>
                </MDBCardBody>
                {/* <MDBCardTitle>
                   
                </MDBCardTitle> */}
            </MDBCard>
        </Stack>
        <Stack>
            <MDBCard className='text-black m-2' style={{borderRadius: '25px',padding:'10px'}} alignment='center'>
                <MDBCardTitle>
                    <Fab variant="extended" style={{backgroundColor:'maroon', color:'white'}}>
                        PASSENGER LIST
                    </Fab>
                </MDBCardTitle>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Aadhar</th>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Gender</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Mobile No.</th>
                            <th scope='col'>Luggage</th>
                            <th scope='col'>Meal Name</th>
                            <th scope='col'>Seat No</th>
                            {/* <th scope='col'>Class</th> */}
                            <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {passengerlist.map(pass=>{
                            return(
                                <tr value={pass.aadhar}>
                                    <th>{pass.aadhar}</th>
                                    <th>{pass.fname}</th>
                                    <th>{pass.lname}</th>
                                    <th>{pass.gender}</th>
                                    <th>{pass.age}</th>
                                    <th>{pass.mobile}</th>
                                    <th>{pass.luggage}</th>
                                    <th>{pass.meal.name}</th>
                                    <th>{pass.seatno}</th>
                                    {/* <th>{pass.travellerClass}</th> */}
                                    <th>
                                        <IconButton aria-label="delete" onClick={()=>{removePassenger(pass.aadhar);
                                                                                {passsengerCount--}
                                                                                }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </th>
                                </tr>
                            )
                        })}
                    </MDBTableBody>
                </MDBTable>

                <MDBCardBody>
                    <Button 
                    onClick={confirmPassengerBtn}
                    hidden={showConfirmPassengerBtn}    
                    variant="contained">
                        Confirm Passengers</Button>
                </MDBCardBody>        

            </MDBCard>
        </Stack>
    </Stack>
     );
}

export default PassengerDetails;