package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.City;

public interface CityRepo extends JpaRepository<City, Integer> {

}
