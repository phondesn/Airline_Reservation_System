package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Table(name = "flight_tbl")
public class Flight extends BaseEntity {
	
	
	@Column(name = "source", length = 50, nullable = false)
	private String source;
	
	@Column(name = "destination", length = 50, nullable = false)
	private String destination;
	
	@Column(name = "date_of_journey", nullable = false)
	private LocalDate doj;
	
	@Column(name = "arrival_time", nullable = false)
	private LocalTime arrivalTime;
	
	@Column(name = "departure_time", nullable = false)
	private LocalTime departureTime;
	
	@Column(name = "economy_price", nullable = false)
	private float economyPrice;
	
	@Column(name = "business_price", nullable = false)
	private float businessPrice;
	
	@Column(name = "firstclass_price", nullable = false)
	private float firstclassPrice;
	
	@Column(name = "layover_location", length = 25)
	private String layoverLocation;
	
	@Column(name = "layover_duration")
	private LocalTime layoverDuration;
	
	
	private int economyClassSeats;
	
	private int businessClassSeats;
	
	private int firstClassSeats;
	
	@ManyToOne
	@JoinColumn(name = "plane_code")
	private Aeroplane plane;
	
	public Flight(String source, String destination, LocalDate doj, LocalTime arrivalTime, LocalTime departureTime,
			float economyPrice, float businessPrice, float firstclassPrice, String layoverLocation,
			LocalTime layoverDuration) {
		super();
		this.source = source;
		this.destination = destination;
		this.doj = doj;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.economyPrice = economyPrice;
		this.businessPrice = businessPrice;
		this.firstclassPrice = firstclassPrice;
		this.layoverLocation = layoverLocation;
		this.layoverDuration = layoverDuration;
	}

	@JsonIgnoreProperties(value = "flight")
	@OneToMany(mappedBy = "flight", fetch = FetchType.EAGER)
	private Set<FlightMeal> flightMeals = new TreeSet<FlightMeal>();
	
	@JsonIgnoreProperties(value = "flight")
	@OneToMany(mappedBy = "flight", fetch = FetchType.EAGER)
	private Set<Ticket> tickets = new TreeSet<Ticket>();

	
}
