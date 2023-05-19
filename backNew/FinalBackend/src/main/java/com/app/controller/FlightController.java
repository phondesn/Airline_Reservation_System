package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FlightDto;
import com.app.dto.FlightMealDto;
import com.app.pojos.Flight;
import com.app.pojos.FlightMeal;
import com.app.pojos.Meal;
import com.app.repo.FlightMealRepo;
import com.app.repo.FlightRepo;
import com.app.service.IAeroplaneService;
import com.app.service.IFlightService;
import com.app.service.IMealService;

@CrossOrigin
@RestController
@RequestMapping("/flights")
public class FlightController {
	public FlightController() {
		System.out.println("Inside flight controller"+getClass());
			}
	
	@Autowired
	private IAeroplaneService aservice;
	@Autowired
	private IFlightService fservice;
	@Autowired
	private FlightMealRepo fmrepo;
	@Autowired
	private FlightRepo frepo;
	@Autowired
	private IMealService mService;
	
	
//	Showing the list of flights
	@GetMapping
	public List<Flight> flightList(){
		return fservice.getFlightList();
	}
	
	//Adding new flight
	@PostMapping
	public Flight addFlight(@RequestBody FlightDto flight) {
		Flight f = fservice.addFlight(flight);
//		FlightMeal fm = new FlightMeal(); 
//		fm.setFlight(f);
//		fmrepo.save(fm);
		return f;
	}
	
	@PostMapping("/exMealToFlight")
	public String addExistingMealToFlight(@RequestBody FlightMealDto flightMeal)
	{
		Meal meal = mService.getMealById(flightMeal.getMealId());
		Flight flight = fservice.getFlightById(flightMeal.getFlightId());
		FlightMeal fm = new FlightMeal();
		fm.setFlight(flight);
		fm.setMeal(meal);
		fmrepo.save(fm);		
		return "Existing meal added to Flight";
	}
	
	//Updating the existing flight
	@PutMapping("/{id}")
	public Flight updateFlight(@RequestBody Flight flight,@PathVariable Integer id) {
		return fservice.updateFlight(flight,id);
		
	}
	
	//Deleting the existing flight
//	@DeleteMapping("/{id}")
//	public String deleteFlight(@PathVariable Integer id) {
//		String mesg = fservice.deleteFlight(id);
//		return mesg;
//	}
}
