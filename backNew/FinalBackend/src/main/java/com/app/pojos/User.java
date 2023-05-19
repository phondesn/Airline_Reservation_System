package com.app.pojos;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@JsonInclude(Include.NON_EMPTY)
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_tbl")
@JsonIgnoreProperties({"complaints","feedbacks"})
public class User {
	
	
//	@Override
//	public String toString() {
//		return "User [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password=" + password
//				+ ", role=" + role + ", dob=" + dob + ", mobile=" + mobile + ", gender=" + gender + "]";
//	}

	@Column(name = "first_name", length = 25, nullable = false)
	private String firstName;
	
	@Column(name = "last_name", length = 25, nullable = false)
	private String lastName;
	
	@Id
	@Column(name = "email", length = 25, nullable = false)
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(name = "password", length = 25, nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role role;
	
	@Column(name = "dob", nullable = false)
	private LocalDate dob;
	
	@Column(name = "mobile_no", length = 10)
//	@Size(min = 10, max = 13)
	private long mobile;
	
	@Column(name = "gender")
	@Size(min = 1, max = 1)
	private String gender;
	
//	@JsonIgnoreProperties(value = "user_complaint")
	@OneToMany(mappedBy = "userComplaint", cascade = CascadeType.REMOVE,fetch = FetchType.EAGER)
	private Set<Complaint> complaints = new TreeSet<Complaint>();
	
//	@JsonIgnoreProperties(value = "user_feedback")
	@OneToMany(mappedBy = "userFeedback", cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private Set<Feedback> feedbacks = new TreeSet<Feedback>();
	
//	@JsonIgnoreProperties(value = "user")
	@OneToMany(mappedBy = "user",fetch = FetchType.EAGER)
	private Set<Ticket> tickets = new TreeSet<Ticket>();
	
	public User(LocalDate dob, String email, String firstName
			, String gender, String lastName, long mobile) {
		this.dob = dob;
		this.email = email;
		this.firstName = firstName;
		this.gender = gender;
		this.lastName = lastName;
		this.mobile = mobile;
	}
	
	public User(String email, long mobile) {
		this.email = email;
		this.mobile = mobile;
	}

	
	public org.springframework.security.core.userdetails.User toUser() {
		if(email != null) {
			GrantedAuthority auth = new SimpleGrantedAuthority(role.name());
			return new org.springframework.security.core.userdetails.User(email, password, Collections.singletonList(auth));
		}
		return null;
	}

}
