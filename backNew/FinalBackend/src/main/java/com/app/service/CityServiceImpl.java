package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.City;
import com.app.repo.CityRepo;

@Service
public class CityServiceImpl implements ICityService {

	@Autowired
	private CityRepo cRepo;

	@Override
	public List<City> getAllCities() {
		
		List<City> citites = cRepo.findAll();
		
		return citites;
	}

}
