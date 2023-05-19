package com.app.repo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Flight;

@Repository
public interface FlightRepo extends JpaRepository<Flight, Integer> {

	List<Flight> findBySourceAndDestination(String source, String dest);

	List<Flight> findBySourceAndDestinationAndDoj(String source, String destination, LocalDate doj);
}
