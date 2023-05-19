package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Flight;
import com.app.pojos.PassengerDetails;
import com.app.repo.FlightRepo;
import com.app.repo.PassengerDetailsRepo;

@Service
public class PassengerDetailsServiceImpl implements IPassengerDetailsService {

	@Autowired
	private FlightRepo frepo;
	@Autowired
	private PassengerDetailsRepo prepo;
	
	/*Add new passanger in the passanger's list by fetching the flights 
	 *as per class(By the Customer)
	 */
	@Override
	public String addPassenger(PassengerDetails passenger,int fid,String travellerClass) {
		prepo.save(passenger);
		Flight flight = frepo.findById(fid).orElseThrow();
		if(travellerClass.equals("BUS")) {
			int seat = flight.getBusinessClassSeats();
			flight.setBusinessClassSeats(--seat);
			frepo.save(flight);
		}
		else if(travellerClass.equals("ECO")) {
			int seat = flight.getEconomyClassSeats();
			flight.setEconomyClassSeats(--seat);
			frepo.save(flight);
		}
		else if(travellerClass.equals("FIR")) {
			int seat = flight.getFirstClassSeats();
			flight.setFirstClassSeats(--seat);;
			frepo.save(flight);
		}
		return "Passenger added";
	}
	
	//Get list of passengers added by the customer(For Customer)
	@Override
	public List<PassengerDetails> getPassengerList() {
		
		return prepo.findAll();
	}
}
