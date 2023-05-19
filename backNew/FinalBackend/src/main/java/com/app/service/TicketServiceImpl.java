package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Ticket;
import com.app.repo.TicketRepo;

@Service
public class TicketServiceImpl implements ITicketService {

	@Autowired
	TicketRepo trepo;
	
	//Add ticket by the customer after 
	@Override
	public Ticket addTicket(Ticket ticket) {
		Ticket newticket = trepo.save(ticket);
		return newticket;
	}

}
