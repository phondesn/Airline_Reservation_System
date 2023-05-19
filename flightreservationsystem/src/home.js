import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Route, Switch, useHistory } from 'react-router-dom';
import FlightList from "./flightList";
import AddPassenger from "./addPassenger";
import image from "./images/collageEdit.jpg"; 
import { lightBlue, red } from "@mui/material/colors";

function FirstPage()
{  
  var history = useHistory();
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  console.log(date);
  const [value, setValue] = React.useState(dayjs(new Date()));
  // const [value, setValue] = React.useState(dayjs('${current.getFullYear()}-${current.getDate()}-${current.getMonth()+1}'));
  console.log(value);
    const [cityList, setCityList] = useState([]);
    const [sourceCity, setSourceCity] = useState([]);
    const [destinationCity, setDestinationCity] = useState([]);
    const [departureDate, setDepartureDate] = useState([]);
    console.log(departureDate);
    const [returnDate, setReturnDate] = useState([]);
    const [travellerClass, setTravellerClass] = useState(["ECO", "BUS", "FIR"]); 
  var [searchBtnDis,setSearchBtnDis] = useState(true);
    // debugger
    useEffect(()=>{
        // debugger
        var token = sessionStorage.getItem("token");
        axios.get("http://localhost:5050/user/home"
        // , 
        // {headers:{"Authorization":"Bearer "+token}}
        )
          .then((result)=>setCityList(result.data));
    }
    ,[]);

    /// Below code is for EC2 instance

  //   useEffect(()=>{
  //     // debugger
  //     var token = sessionStorage.getItem("token");
  //     axios.get("http://15.207.16.116:5050/user/home"
  //     // , 
  //     // {headers:{"Authorization":"Bearer "+token}}
  //     )
  //       .then((result)=>setCityList(result.data));
  // }
  // ,[]);
    console.log(cityList);
    // console.log(option);
    

    const handleChangeAtSource = (event) => {
      // if (destinationCity != null
      //     && sendDepartureDate != null && travellerClass != null) {
      //     setSearchBtnDis = false;
      //   }
        console.log(searchBtnDis);
      setSourceCity(event.target.value);
    };
    console.log(sourceCity);
    // // debugger
    
    const handleChangeAtDestination = (event) => {
      // if (sourceCity != null
      //   && sendDepartureDate != null && travellerClass != null) {
      //   setSearchBtnDis = false;
      // }
      console.log(searchBtnDis);
      setDestinationCity(event.target.value);
    };
    console.log(destinationCity);

    const handleChangeAtClass = (event) =>{
      // if (sourceCity != null
      //   && destinationCity != null
      //   && sendDepartureDate != null) {
      //   setSearchBtnDis = false;
      // }
      console.log(searchBtnDis);
      setTravellerClass(event.target.value);
    };
    console.log(travellerClass);

    const handleDepartureDate = (event)=>{
      // if (sourceCity != null
      //   && destinationCity != null
      //   && travellerClass != null) {
      //   setSearchBtnDis = false;
      // }
      console.log(searchBtnDis);
      setDepartureDate(event)
    };
    console.log(departureDate);

    const departureMonth = `${departureDate.$M + 1}`;
    console.log(departureMonth);
     const departureDay = `${departureDate.$D}`;
     console.log(departureDay);
     const departureYear = `${departureDate.$y}`;
     console.log(departureYear);
     
     var sendMonth = `${departureMonth}`

    if (departureMonth < 10) {
        sendMonth = "0"+sendMonth;
    } else {
        sendMonth = `${departureMonth}`
    }
    console.log(sendMonth);
    // const sendDepartureDate, setSendDepartureDate = `${departureDay}-${departureMonth}-${departureDate.$D}`);
    // sendDepartureDate = (${departureDate.$y}-${departureDate.$M + 1}-${departureDate.$D});
    const sendDepartureDate = departureYear+"-"+sendMonth+"-"+departureDay;
    console.log(sendDepartureDate);
    // const handleSearchBtn = () => {

    // }

    // if (sourceCity !=null && destinationCity != null
    //   && sendDepartureDate != null && travellerClass != null) {
    //   setSearchBtnDis = false;
    // } 
    console.log(searchBtnDis);
    const [resultData, setResultData] = useState([]);
    const handleSearchBtn = () => {
      if (sourceCity == -1 && destinationCity == -1
        && sendDepartureDate != null && travellerClass != null) 
        {
          console.log(searchBtnDis);
        var JsonData = {
        source: sourceCity,
        destination: destinationCity,
        doj:sendDepartureDate,
        travellerClass:travellerClass
      }
      sessionStorage.setItem("class",travellerClass);
      debugger
      // axios.post("http://localhost:5050/user/allflightswithdoj", JsonData).then((res)=>{
      //   console.log(res.data);
      //   setResultData(res.data);
      // })
      history.push('/listOfFlights',{params:JsonData});}
      else{
        debugger
        setSearchBtnDis(false);
      }
    }
    return (
      <>
      <center>
      <div style={{backgroundImage:`url(${image})`}} className='backgroundHomeImage'>
        
        <div id ="returnDiv" 
        style={{backgroundColor:"#05386B",
         height:"50%", width:"55%", marginLeft:"23%", marginTop:"5%"
         ,position:"absolute"}}>
        <FormControl required sx={{ mt: 2, mr:2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label"
        style={{color:"white"}}>Source</InputLabel>
        <Select 
          // style={{backgroundColor:"white"}}
          style={{color:"white"}}
          className="homeInputBoxes"
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={cityList.cityName}
          label="Source *"
          onChange={handleChangeAtSource}>
          <MenuItem value={-1}>
            <em color="white">Select City</em>
          </MenuItem>
      {cityList.map(city=>{
        // debugger;
        return <MenuItem value={city.cityName}>{city.cityName}</MenuItem>
      })}
        </Select>
        <FormHelperText style={{color:"red"}}>Required</FormHelperText>
      </FormControl>

      <FormControl required sx={{ mt: 2, mr:2, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-required-label" 
        style={{color:"white"}}>Destination</InputLabel>
        <Select 
        style={{color:"white"}}
        className="homeInputBoxes"
        // style={{backgroundColor:"white"}}
        
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={cityList.cityName}
          label="Destination *"
          onChange={handleChangeAtDestination}
        >
          <MenuItem value={-1}>
            <em color="white">Select City</em>
          </MenuItem>
      {cityList.map(city=>{
        return <MenuItem value={city.cityName}>{city.cityName}</MenuItem>
      })}
        </Select>
        <FormHelperText style={{color:"red"}}>Required</FormHelperText>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs} sx={{color:"white"}}>
      <DatePicker sx={{ mt: 2, mr:2, minWidth: 120, backgroundColor:"#41B3A3",
        colorScheme:"white"
        }}
      id="departureDatePicker"
        format="LL"
        onChange={handleDepartureDate}
        value={departureDate}
        label="Date of Departure"
        // minDate={current.getDate()}
        disablePast={value}
        minDate={value}
        renderInput={(params)=><TextField {...params}/>}
        
      />
    </LocalizationProvider>


    {/* <FormControl required sx={{ mt: 2, mr:2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label"
        style={{color:"white"}}>Source</InputLabel>
        <Select 
          // style={{backgroundColor:"white"}}
          style={{color:"white"}}
          className="homeInputBoxes"
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={cityList.cityName}
          label="Source *"
          onChange={handleChangeAtSource}>
          <MenuItem value={-1}>
            <em color="white">Select City</em>
          </MenuItem>
           */}
    <FormControl required sx={{ mt: 2, mr:2, minWidth: 150, backgroundColor: "#05386B" }}>
        <InputLabel id="demo-simple-select-required-label" style={{color:"white"}}>Class</InputLabel>
        <Select 
        style={{backgroundColor:"#41B3A3", color:"black"}}
        // className="homeInputBoxes"
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={travellerClass}
          label="Class*"
          onChange={handleChangeAtClass}
          // renderInput={(params)=><TextField {...params}/>}
        >
          <MenuItem value={-1}>
            <em>Select Class</em>
          </MenuItem>
          <MenuItem value={"ECO"}>Economy</MenuItem>
          <MenuItem value={"BUS"}>Business</MenuItem>
          <MenuItem value={"FIR"}>First Class</MenuItem>
        </Select>
        <FormHelperText sx={{backgroundColor:"#05386B", color:"red"}}>Required</FormHelperText>
      </FormControl>
      </div>
        {/* </div> */}
       
        {/* <Box justifyContent={"center"}>  */}
        <center><Stack 
        marginLeft={83} 
        marginTop={25} 
        marginBottom={2} 
        spacing={2} 
        direction="row"
        position={"absolute"}
       >
      <Button
      style={{backgroundColor:"#41B3A3", color:"white"}}
      // disabled={searchBtnDis}
      className="homeInputBoxes"
       onClick={handleSearchBtn}
      variant="outlined">
        Search Flights</Button>
        <Button hidden={searchBtnDis}
        style={{backgroundColor:"lightcoral", color:"black"}}
        className="homeInputBoxes"
        variant="outlined">Enter All fields first</Button>
    </Stack></center>
        {/* </Box> */}

</div></center>
      </>
    )
    }
export default FirstPage;