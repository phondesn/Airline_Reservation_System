import { Fab, Stack, TextField } from "@mui/material";
import { MDBCard, MDBCardTitle } from "mdb-react-ui-kit";
import { useState } from "react";

function ListOfFlights() {

    var [flight, setFlight] = useState({source:"Chennai",
                                            destination:"Delhi",
                                            doj:"2023-03-08",
                                            class:"Economy"
                                            })

    var [flights, setFlights] = useState([{id:"12",
                                            source:"Chennai",
                                            destination:"Delhi",
                                            doj:"2023-03-08",
                                            planeCode:"A380",
                                            arrivalTime:"12:40",
                                            departureTime:"1:15",
                                            layoverLocation:"Mumbai",
                                            layoverDuration:"1:00",
                                            economySeats:"24",
                                            businessSeats:"12",
                                            firstSeats:"1",
                                            economyPrice:"100",
                                            businessPrice:"1000",
                                            firstPrice:"10000"
                                        },
                                            {id:"12",
                                            source:"Chennai",
                                            destination:"Delhi",
                                            doj:"2023-03-08",
                                            planeCode:"A380",
                                            arrivalTime:"12:40",
                                            departureTime:"1:15",
                                            layoverLocation:"Mumbai",
                                            layoverDuration:"1:00",
                                            economySeats:"24",
                                            businessSeats:"12",
                                            firstSeats:"1",
                                            economyPrice:"100",
                                            businessPrice:"1000",
                                            firstPrice:"10000"
                                        }])

    //will have to write useEffect here

    return ( 
            <Stack>
                <Stack>
                    <MDBCard className='text-black m-2' style={{borderRadius: '25px',padding:'10px', backgroundColor:''}}>
                        <MDBCardTitle>
                            <Fab variant="extended" style={{backgroundColor:'maroon', color:'white'}}>
                                FLIGHTS FOR
                            </Fab>
                        </MDBCardTitle>
                        <Stack direction='row' spacing={2}>
                            <TextField
                                required
                                id="idSource"
                                label="Source"
                                defaultValue={flight.source}
                                name='source'
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
                                InputProps={{
                                    readOnly: true,
                                  }}
                            />
                            <TextField
                                required
                                id="idClass"
                                label="Class"
                                defaultValue={flight.class}
                                name='class'
                                InputProps={{
                                    readOnly: true,
                                  }}
                            />
                        </Stack>
                    </MDBCard>
                </Stack>
                <MDBCard className='text-black m-2' style={{borderRadius: '25px',padding:'10px', backgroundColor:''}}>
                    <Stack direction='row' spacing={2}>
                        
                    </Stack>
                </MDBCard>
            </Stack>
     );
}

export default ListOfFlights;