package com.app.pojos;

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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ticket_details")
@JsonIgnoreProperties({"user", "flight", "passengers"})
public class Ticket extends BaseEntity {

	@Column(name = "seats", nullable = false)
	private int seats;
	
	@Column(name = "gst", nullable = false)
	private float gst;
	
	@Column(name = "discount")
	private float discount;
	
//	@JsonIgnoreProperties(value = "tickets")
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
//	@JsonIgnoreProperties(value = "tickets")
	@ManyToOne
	@JoinColumn(name = "flight_id", nullable = false)
	private Flight flight;
	
//	@JsonIgnoreProperties(value = "ticket")
	@OneToMany(mappedBy = "ticket", fetch = FetchType.EAGER)
	private Set<PassengerDetails> passengers = new TreeSet<PassengerDetails>();

	public Ticket(int seats, float gst, float discount, User user, Flight flight) {
		super();
		this.seats = seats;
		this.gst = gst;
		this.discount = discount;
		this.user = user;
		this.flight = flight;
	}
	
	
}
