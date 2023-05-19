package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.pojos.FlightMeal;
import com.app.pojos.Meal;

public interface IMealService {
	
	Meal getMealById(Integer id);
	
	Meal addNewMeal(Meal meal);
	
	List<Meal> getMealList();
	
	Set<FlightMeal> getMealListByFlightId(Integer fId);
	
	Meal updateMeal(Meal m,Integer id);
	
	String deleteMeal(Integer id);

}
