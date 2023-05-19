package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Entity
@Table(name = "complaint")
public class Complaint extends BaseEntity {
	
	
	@Column(name = "title", length = 50, nullable = false)
	private String title;
	
	@Column(name = "description", columnDefinition = "longtext")
	private String description;
	
	@Enumerated(value = EnumType.STRING)
	@Column(length = 15)
	private Status status;
	
	@JsonIgnoreProperties(value = "complaints")
	@ManyToOne
	@JoinColumn(name = "user_email")
	private User userComplaint;

}
