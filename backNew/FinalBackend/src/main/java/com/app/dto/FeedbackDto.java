package com.app.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonInclude(Include.NON_EMPTY)
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackDto {
	
	private int id;
	
	private String title;
	
	private String description;
	
	private String email;

	public FeedbackDto(String title, String description, String email) {
		super();
		this.title = title;
		this.description = description;
		this.email = email;
	}
	
}
