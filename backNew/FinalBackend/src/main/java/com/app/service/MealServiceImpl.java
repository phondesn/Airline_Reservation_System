package com.app.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Flight;
import com.app.pojos.FlightMeal;
import com.app.pojos.Meal;
import com.app.repo.FlightMealRepo;
import com.app.repo.FlightRepo;
import com.app.repo.MealRepo;


@Service
public class MealServiceImpl implements IMealService {
	
	
	@Autowired
	private MealRepo mrepo;
	@Autowired
	private FlightMealRepo fmrepo;
	@Autowired
	private FlightRepo fRepo;
	
	
	//Fetch the meal by its id for adding it into the booking(For User)
	@Override
	public Meal getMealById(Integer id) {
		Meal meal = mrepo.findById(id).orElseThrow();
		return meal;
	}
	
	//Add new meal into the List of meals(For Flight admin)
	@Override
	public Meal addNewMeal(Meal meal) {
		return mrepo.save(meal);
	}
	
	//Fetch all the meals from list of meals(For User as well as Flight admin)
	@Override
	public List<Meal> getMealList() {
		
		return mrepo.findAll();
	}
	
	//Update the existing meal from meal list(for Flight admin)
	@Override
	public Meal updateMeal(Meal m, Integer id) {
		Meal oldmeal = mrepo.findById(id).orElseThrow();
	oldmeal.setCategory(m.getCategory());
	oldmeal.setName(m.getName());
	oldmeal.setSubCategory(m.getSubCategory());
	return mrepo.save(oldmeal);
	}
	
	//Delete the existing meal from the list(For Flight admin)
	@Override
	public String deleteMeal(Integer id) {
		mrepo.deleteById(id);
		return "deleted successsfully";
	}

	@Override
	public Set<FlightMeal> getMealListByFlightId(Integer fId) {
		
		Flight flight = fRepo.findById(fId).orElseThrow(()->new RuntimeException());
//		List<Meal> flightMeal = fmrepo.findByFlightId(fId).getMeal();
		Set<FlightMeal> flightMeal = flight.getFlightMeals();
		return flightMeal;
	}

}
