package com.app.pojos;

import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "meal_tbl")
@JsonIgnoreProperties({"passenger", "flightMeals"})
public class Meal extends BaseEntity {

	@Column(name = "dish_name", length = 50, nullable = false, unique = true)
	private String name;
	
	@Column(name = "dish_category", length = 10, nullable = false)
	private String category;
	
	@Column(name = "dish_subCategory", length = 10, nullable = false)
	private String subCategory;
	
//	@JsonIgnoreProperties(value = "meal")
	@OneToOne(mappedBy = "meal")
	private PassengerDetails passenger;
	
//	@JsonIgnoreProperties(value = "meal")
	@OneToMany(mappedBy = "meal", fetch = FetchType.EAGER)
	private Set<FlightMeal> flightMeals = new TreeSet<FlightMeal>();
	
	
}
