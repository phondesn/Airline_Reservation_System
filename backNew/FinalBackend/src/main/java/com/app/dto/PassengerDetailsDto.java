package com.app.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PassengerDetailsDto {
	
	private long aadhar;
	
	private String fname;
	
	private String lname;
	
	private int age;
	
	private long mobile;
	
	private String gender;
	
	private float luggage;
	
	private String seatno;
	
	private String seatClass;
	
	private MealDto meal;
//	private int meal;
//	private String meal;
	
	private String travellerClass;

}
