package com.app.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MealDto {
	
	private int id;

	private String name;

	private String category;

	private String subCategory;

	public MealDto(String name, String category, String subCategory) {
		super();
		this.name = name;
		this.category = category;
		this.subCategory = subCategory;
	}

	public MealDto(int id) {
		super();
		this.id = id;
	}

}
