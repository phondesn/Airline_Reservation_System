package com.app.dto;

import java.time.LocalDate;
import com.app.pojos.Role;
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
public class UserDto {

	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String password;
	
	private Role role;
	
	private LocalDate dob;
	
	private long mobile;
	
	private String gender;

}
