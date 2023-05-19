package com.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Flight;
import com.app.pojos.FlightMeal;
import com.app.pojos.Meal;
import com.app.repo.FlightMealRepo;
import com.app.repo.FlightRepo;
import com.app.service.IMealService;

@CrossOrigin
@RestController
@RequestMapping("/meals")
public class MealController {
	@Autowired
	private IMealService mservice;
	@Autowired
	private FlightMealRepo fmrepo;
	@Autowired
	private FlightRepo frepo;
	public MealController() {
		System.out.println("Inside Meal Controller"+getClass());
	}
	
	
	// Fetching the list of the meals
	@GetMapping
	public List<Meal> mealList(){
		return mservice.getMealList();
	}
	
//	@GetMapping("/{fId}")
//	public Set<FlightMeal> flightMealList(@PathVariable Integer fId)
//	{
//		
//		return mservice.getMealListByFlightId(fId);
//		
//	}
	
	//Adding new meal to the list
	@PostMapping("/{id}")
	public Meal addNewMeal(@RequestBody Meal meal,@PathVariable Integer id) {
		Meal m = mservice.addNewMeal(meal);
		//List<FlightMeal> fmeals = fmrepo.findByFlightId(id);
//		List<FlightMeal> fmeals = fmrepo.findByFlight(frepo.findById(id).orElseThrow());
//		for(FlightMeal fm:fmeals) {
//			if(fm.getMeal()== null) {
//				fm.setMeal(m);
//				fmrepo.save(fm);
//			}
//		}
		//Flight f = frepo.findById(id).orElseThrow(); 
		//fm.setFlight(f);
//		for(FlightMeal fm:fmeals ) {
//			fm.setMeal(m);
//			fmrepo.save(fm);
//		}
		//FlightMeal fm = fmrepo.findByFlightId(id);
		FlightMeal fm = new FlightMeal();
		fm.setFlight(frepo.findById(id).orElseThrow());
		fm.setMeal(m);
		fmrepo.save(fm);
		return m;
	}
	
	@PostMapping
	public Meal addNewMeal(@RequestBody Meal meal) {
		Meal m = mservice.addNewMeal(meal);
		//List<FlightMeal> fmeals = fmrepo.findByFlightId(id);
//		List<FlightMeal> fmeals = fmrepo.findByFlight(frepo.findById(id).orElseThrow());
//		for(FlightMeal fm:fmeals) {
//			if(fm.getMeal()== null) {
//				fm.setMeal(m);
//				fmrepo.save(fm);
//			}
//		}
		//Flight f = frepo.findById(id).orElseThrow(); 
		//fm.setFlight(f);
//		for(FlightMeal fm:fmeals ) {
//			fm.setMeal(m);
//			fmrepo.save(fm);
//		}
		//FlightMeal fm = fmrepo.findByFlightId(id);
//		FlightMeal fm = new FlightMeal();
//		fm.setFlight(frepo.findById(id).orElseThrow());
//		fm.setMeal(m);
//		fmrepo.save(fm);
		return m;
	}
	
	//Updating the existing meal
	@PutMapping("/{id}")
	public Meal updateMeal(@RequestBody Meal meal,@PathVariable Integer id) {
		return mservice.updateMeal(meal,id);
		
	}
	
	//Deleting the existing meal
	@DeleteMapping("/{id}")
	public String deleteMeal(@PathVariable Integer id) {
		String mesg = mservice.deleteMeal(id);
		return mesg;
	}
	
	// find meal by flightid
	@GetMapping("/{id}")
	public List<Meal> getMealList(@PathVariable Integer id){
		List<Meal> meals = new ArrayList<Meal>();
		List<FlightMeal> fmeals = fmrepo.findByFlight(frepo.findById(id).orElseThrow());
		for(FlightMeal fm:fmeals) {
			meals.add(fm.getMeal());
		}
		return meals;
	}
}
