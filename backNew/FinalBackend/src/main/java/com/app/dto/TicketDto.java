package com.app.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TicketDto {

	private int seats;

	private float gst;

	private float discount;
	
	private float totalprice;
	
	private String source;
	
	private String destination;

}
