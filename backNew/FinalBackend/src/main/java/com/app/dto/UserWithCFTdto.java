package com.app.dto;

import java.time.LocalDate;
import java.util.Set;

import com.app.pojos.Complaint;
import com.app.pojos.Feedback;
import com.app.pojos.Role;
import com.app.pojos.Ticket;
import com.app.pojos.User;
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
public class UserWithCFTdto {

//	private UserDto userDto;
	
	private User user;
	
	private Set<Ticket> tickets;
	
	private Set<Feedback> feedbacks;
	
	private Set<Complaint> complaints;
}
