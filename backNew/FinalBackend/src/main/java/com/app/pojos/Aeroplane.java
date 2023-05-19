package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "plane_details")
public class Aeroplane {
	
	@Id
	@Column(name = "plane_code", length = 12)
	private String planeCode;
	
	@Column(name = "built", length = 15, nullable = false)
	private String built;
	
	@Column(name = "economy_seats")
	private int economyClassSeats;
	
	@Column(name = "business_seats")
	private int businessClassSeats;
	
	@Column(name = "firstclass_seats")
	private int firstClassSeats;

}
