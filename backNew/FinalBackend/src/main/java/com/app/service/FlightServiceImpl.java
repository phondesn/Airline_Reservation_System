package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.FlightDto;
import com.app.pojos.Aeroplane;
import com.app.pojos.Flight;
import com.app.repo.AeroplaneRepo;
import com.app.repo.FlightRepo;

@Service
public class FlightServiceImpl implements IFlightService {

	@Autowired
	private AeroplaneRepo arepo;
	@Autowired
	private FlightRepo frepo;
	
	//Fetch all the flights by source, destination by the customer
	@Override
	public List<Flight> getAllFlights(String source, String destination) {
		List<Flight> flights = frepo.findBySourceAndDestination(source, destination);
		return flights;
	}

	//Fetch all the flights by source, destination and Date Of Journey by the customer
	@Override
	public List<Flight> getAllFlightsWithDoj(String source, String destination, LocalDate doj) {
		List<Flight> flights = frepo.findBySourceAndDestinationAndDoj(source, destination, doj);
		return flights;
	}

//	@Override
//	public Flight getSelectedFlight(int flightId) {
//		Flight selectedFlight = frepo.findById(flight.getId()).orElseThrow();
//		return selectedFlight;
//	}

	//Fetch the flight by its ID(For User)
	@Override
	public Flight getFlightById(int fid) {
		Flight flight = frepo.findById(fid).orElseThrow();
		return flight;
	}
	
	//Add new FLight by passing the aeroplane Id
	@Override
	public Flight addFlight(FlightDto f) {
//		Aeroplane aeroplane = arepo.findById("A801").orElseThrow();
		Aeroplane aeroplane = arepo.findById(f.getPlane()).orElseThrow();
		Flight flight = new Flight(f.getSource(),f.getDestination(),f.getDoj(),f.getArrivalTime(),f.getDepartureTime(),f.getEconomyPrice(),f.getBusinessPrice(),f.getFirstclassPrice(),f.getLayoverLocation(),f.getLayoverDuration());
	   flight.setEconomyClassSeats(aeroplane.getEconomyClassSeats());
	   flight.setBusinessClassSeats(aeroplane.getBusinessClassSeats());
	   flight.setFirstClassSeats(aeroplane.getFirstClassSeats());
		flight.setPlane(aeroplane);
		return frepo.save(flight);
	}
	
	//Fetch the list of all the existing Flights(For Flight admin)
	@Override
	public List<Flight> getFlightList() {
		return frepo.findAll();
	}
	
	//Update the existing flight(For Flight admin)
	@Override
	public Flight updateFlight(Flight f, Integer id) {
		Flight oldf = frepo.findById(id).orElseThrow();
		oldf.setArrivalTime(f.getArrivalTime());
		oldf.setBusinessPrice(f.getBusinessPrice());
		oldf.setDepartureTime(f.getDepartureTime());
		oldf.setDoj(f.getDoj());
		oldf.setEconomyPrice(f.getEconomyPrice());
		oldf.setFirstclassPrice(f.getFirstclassPrice());
		oldf.setLayoverDuration(f.getLayoverDuration());
		oldf.setLayoverLocation(f.getLayoverLocation());
		oldf.setSource(f.getSource());
		oldf.setDestination(f.getDestination());
		return frepo.save(oldf);
	}
	
//	//Delete the existing flight(For Flight admin)
//	@Override
//	public String deleteFlight(Integer id) {
//		frepo.deleteById(id);
//		return "flight deleted successfully";
//	}

}
