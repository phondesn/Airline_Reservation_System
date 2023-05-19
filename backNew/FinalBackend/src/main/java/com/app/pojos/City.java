package com.app.pojos;

import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "city")
public class City {
	
	
	@Id
	@Column(name = "pincode")
	private int pincode;
	
	@Column(name = "city_name", length = 25, nullable = false, unique = true)
	private String cityName;
	
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "city_pincode", nullable = false)
	private Set<Airport> airports = new TreeSet<Airport>();

}
