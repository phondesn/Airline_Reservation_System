package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "feedback")
public class Feedback extends BaseEntity{
	
	@Column(name = "title", length = 50, nullable = false)
	private String title;
	
	@Column(name = "description", columnDefinition = "longtext")
	private String description;
	
	@JsonIgnoreProperties(value = "feedbacks")
	@ManyToOne
	@JoinColumn(name = "user_email")
	private User userFeedback;

}
