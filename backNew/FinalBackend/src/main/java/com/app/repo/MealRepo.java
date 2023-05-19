package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Meal;

@Repository
public interface MealRepo extends JpaRepository<Meal, Integer> {

}
