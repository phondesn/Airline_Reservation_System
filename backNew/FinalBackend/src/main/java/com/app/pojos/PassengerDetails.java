package com.app.pojos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

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
@Table(name = "passenger_details")
public class PassengerDetails {
	
	@Id
	@Column(name = "aadhar")
	private long aadhar;
	
	@Column(name = "first_name", length = 25, nullable = false)
	private String fname;
	
	@Column(name = "last_name", length = 25, nullable = false)
	private String lname;
	
	@Column(name = "age", nullable = false)
	private int age;
	
	@Column(name = "mobile_no", nullable = false)
//	@Size(min = 10, max = 13)
	private long mobile;
	
	@Column(name = "gender", nullable = false, length = 1)
	private String gender;
	
	@Column(name = "luggage_wt")
	private float luggage;
	
	@Column(name = "seat_no", nullable = false, length = 5)
	private String seatno;
	
	@Column(name = "seat_class", nullable = false, length = 3)
	private String seatClass;
	
	@JsonIgnoreProperties(value = "passenger")
	@OneToOne
	@JoinColumn(name = "meal_id")
	private Meal meal;
	
	@JsonIgnoreProperties(value = "passengers")
	@ManyToOne
	@JoinColumn(name = "ticket_id")
	private Ticket ticket;

}
