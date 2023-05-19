package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.FlightDto;
import com.app.pojos.Flight;


public interface IFlightService {
	
	List<Flight> getAllFlights(String source, String destination);
	
	List<Flight> getAllFlightsWithDoj(String source, String destination, LocalDate doj);
	
	//Flight getSelectedFlight(int flightId);
	
	Flight getFlightById(int fid);
	
	
	Flight addFlight(FlightDto f);
	
	List<Flight> getFlightList();
	Flight updateFlight(Flight f,Integer id);
	
//	String deleteFlight(Integer id);
}
