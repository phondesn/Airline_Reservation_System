package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(Include.NON_EMPTY)
public class FlightDto {
	
	private int id;
	
	private String source;
	
	private String destination;
	
	private LocalDate doj;
	
	private LocalTime arrivalTime;
	
	private LocalTime departureTime;
	
	private float economyPrice;
	
	private float businessPrice;
	
	private float firstclassPrice;
	
	private String layoverLocation;
	
	private LocalTime layoverDuration;
	
	private String plane;

	public FlightDto(String source, String destination, LocalDate doj, LocalTime arrivalTime, LocalTime departureTime,
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

	public FlightDto(int id, String source, String destination, LocalDate doj, LocalTime arrivalTime,
			LocalTime departureTime, float economyPrice, float businessPrice, float firstclassPrice,
			String layoverLocation, LocalTime layoverDuration) {
		super();
		this.id = id;
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

	public FlightDto(int id,String source, String destination, LocalDate doj, LocalTime arrivalTime, LocalTime departureTime,
			float economyPrice, String layoverLocation, LocalTime layoverDuration) {
		super();
		this.id = id;
		this.source = source;
		this.destination = destination;
		this.doj = doj;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.economyPrice = economyPrice;
		this.layoverLocation = layoverLocation;
		this.layoverDuration = layoverDuration;
	}

	public FlightDto(int id,String source, String destination, LocalDate doj, LocalTime arrivalTime, LocalTime departureTime,
			String layoverLocation,float businessPrice, LocalTime layoverDuration) {
		super();
		this.id = id;
		this.source = source;
		this.destination = destination;
		this.doj = doj;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.businessPrice = businessPrice;
		this.layoverLocation = layoverLocation;
		this.layoverDuration = layoverDuration;
	}

	public FlightDto(int id,String source, String destination, LocalDate doj, LocalTime arrivalTime, LocalTime departureTime,
			String layoverLocation,LocalTime layoverDuration,float firstclassPrice) {
		super();
		this.id = id;
		this.source = source;
		this.destination = destination;
		this.doj = doj;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.firstclassPrice = firstclassPrice;
		this.layoverLocation = layoverLocation;
		this.layoverDuration = layoverDuration;
	}
	
	
	
	

}
