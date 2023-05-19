package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PassengerTicketDto {
	
	private int ticketId;
	private long aadhar;
	private int age;
	private String fname;
	private String gender;
	private String lname;
	private float luggage;
	private MealDto meal;
	private long mobile;
	private String seatClass;
	private String seatno;
	private int seat;
	private float gst;
	private float discount;
	private String email;
	
	public PassengerTicketDto(long aadhar, int age, String fname, String gender, String lname, float luggage,
			MealDto meal, long mobile, String seatClass, String seatno, int seat, float gst, float discount,
			String email) {
		super();
		this.aadhar = aadhar;
		this.age = age;
		this.fname = fname;
		this.gender = gender;
		this.lname = lname;
		this.luggage = luggage;
		this.meal = meal;
		this.mobile = mobile;
		this.seatClass = seatClass;
		this.seatno = seatno;
		this.seat = seat;
		this.gst = gst;
		this.discount = discount;
		this.email = email;
	}
	
	

}
