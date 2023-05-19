package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SourceAndDestinationDto {

	private String source;
	private String destination;
	private LocalDate doj;
	private String travellerClass;
	
	public SourceAndDestinationDto(String source, String destination) {
		super();
		this.source = source;
		this.destination = destination;
	}
}
