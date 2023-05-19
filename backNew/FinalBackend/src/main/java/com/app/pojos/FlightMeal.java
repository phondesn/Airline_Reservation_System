package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "flight_meal")
public class FlightMeal extends BaseEntity {
	
	@JsonIgnoreProperties(value = "flightMeals")
	@ManyToOne
	@JoinColumn(name = "meal_id", nullable = false)
	private Meal meal;
	
	
	@JsonIgnoreProperties(value = "flightMeals")
	@ManyToOne
	@JoinColumn(name = "flight_id", nullable = false)
	private Flight flight;
}
