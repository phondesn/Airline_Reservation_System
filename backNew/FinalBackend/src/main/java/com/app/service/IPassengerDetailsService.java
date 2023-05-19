package com.app.service;

import java.util.List;

import com.app.pojos.PassengerDetails;

public interface IPassengerDetailsService {

	String addPassenger(PassengerDetails passenger,int fid,String travellerClass);
	List<PassengerDetails> getPassengerList();
}
