package com.app.dto;


import com.app.pojos.Status;
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
public class ComplaintDto{
	
	private int id;
	
	private String title;
	
	private String description;
	
	private Status status;
	
	private String email;

	public ComplaintDto(String title, String description, Status status) {
		super();
		this.title = title;
		this.description = description;
		this.status = status;
	}

	public ComplaintDto(int id, String email) {
		super();
		this.id = id;
		this.email = email;
	}

}
