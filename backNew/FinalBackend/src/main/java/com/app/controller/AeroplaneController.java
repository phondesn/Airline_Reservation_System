package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Aeroplane;
import com.app.repo.AeroplaneRepo;
import com.app.service.IAeroplaneService;

@CrossOrigin
@RestController
@RequestMapping("/aeroplane")
public class AeroplaneController {
	
	@Autowired
	private IAeroplaneService aservice;
	@Autowired
	private AeroplaneRepo arepo;
	public AeroplaneController() {
		System.out.println("Inside aeroplane ctor"+getClass());
	}
	
	// fetching all Aeroplane details
	@GetMapping
	public List<Aeroplane> getAeroplaneList(){
	
		return aservice.aeroplaneList();
	}
	
	
	// creating New Resource --> Adding Aeroplane Details
	@PostMapping
	public Aeroplane registerAeroplane(@RequestBody Aeroplane aeroplane) {
		Aeroplane a = aservice.addNewAeroplane(aeroplane);
		return a;
	}
	
	// updating planedetails by planecode
	@PutMapping("/{planeCode}")
	public Aeroplane updateAeroplane(@RequestBody Aeroplane aeroplane,@PathVariable String planeCode) {
		return aservice.updateAeroplane(aeroplane, planeCode);
	}

//	@DeleteMapping("/{planeCode}")
//	public String deleteAeroplane(@PathVariable String planeCode) {
//		String mesg = aservice.deleteAeroplane(planeCode);
//		//Aeroplane aero = arepo.findById(planeCode).orElseThrow();
//		return mesg;
//	}

	
}
