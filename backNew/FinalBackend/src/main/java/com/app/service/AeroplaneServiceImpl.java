package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Aeroplane;
import com.app.pojos.Flight;
import com.app.repo.AeroplaneRepo;
import com.app.repo.FlightRepo;

@Service
@Transactional
public class AeroplaneServiceImpl implements IAeroplaneService {
	@Autowired
	private FlightRepo frepo;
	@Autowired
	private AeroplaneRepo arepo;

	//Add new plane into the Aeroplane list(By Super admin)
	@Override
	public Aeroplane addNewAeroplane(Aeroplane aero) {
		
		return arepo.save(aero);
	}

	//Get all the planes in a list(For the super admin)
	@Override
	public List<Aeroplane> aeroplaneList() {
		List<Aeroplane> alist = arepo.findAll();
		return alist;
	}

	//Update the existing aeroplane
	@Override
	public Aeroplane updateAeroplane(Aeroplane aero, String planecode) {
		Aeroplane oldaero = arepo.findById(planecode).orElseThrow();
		oldaero.setBuilt(aero.getBuilt());
		oldaero.setBusinessClassSeats(aero.getBusinessClassSeats());
		oldaero.setEconomyClassSeats(aero.getEconomyClassSeats());
		oldaero.setFirstClassSeats(aero.getFirstClassSeats());
		return arepo.save(oldaero);
	}
	
//	//Delete the Existinf aeroplane
//	@Override
//	public String deleteAeroplane(String pcode) {
//		Aeroplane aero = arepo.findById(pcode).orElseThrow();
//		List<Flight> flights = frepo.findByPlane(aero);
//		frepo.deleteInBatch(flights);
//		arepo.deleteById(pcode);
//		return "Aeroplane deleted";
//	}

}
