package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.FlightMeal;
import com.app.pojos.Flight;
import java.util.List;

public interface FlightMealRepo extends JpaRepository<FlightMeal,Integer> {
	List<FlightMeal> findByFlight(Flight flight);
	
//	FlightMeal findByFlightId(Integer id);

	List<FlightMeal> findByFlightId(Integer id);
}
