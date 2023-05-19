package com.app.service;

import java.util.List;

import com.app.pojos.Aeroplane;

public interface IAeroplaneService {
	
	Aeroplane addNewAeroplane(Aeroplane aero);
	List<Aeroplane> aeroplaneList();
	
	Aeroplane updateAeroplane(Aeroplane aero,String planecode);
	//String deleteAeroplane(String pcode);
}

