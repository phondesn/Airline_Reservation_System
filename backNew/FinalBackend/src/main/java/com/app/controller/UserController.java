package com.app.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ComplaintDto;
import com.app.dto.EmailClassDto;
import com.app.dto.FeedbackDto;
import com.app.dto.FlightDto;
import com.app.dto.PassengerDetailsDto;
import com.app.dto.SourceAndDestinationDto;
import com.app.dto.TicketDto;
import com.app.dto.UserDto;
import com.app.pojos.City;
import com.app.pojos.Complaint;
import com.app.pojos.Feedback;
import com.app.pojos.Flight;
import com.app.pojos.Meal;
import com.app.pojos.PassengerDetails;
import com.app.pojos.Role;
import com.app.pojos.Ticket;
import com.app.pojos.User;
import com.app.repo.PassengerDetailsRepo;
import com.app.repo.TicketRepo;
import com.app.service.ICityService;
import com.app.service.IComplaintService;
import com.app.service.IFeedbackService;
import com.app.service.IFlightService;
import com.app.service.IMealService;
import com.app.service.IPassengerDetailsService;
import com.app.service.ITicketService;
import com.app.service.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private TicketRepo trepo;
	
	@Autowired
	private PassengerDetailsRepo prepo;
	
	@Autowired
	IUserService uservice;
	
	@Autowired
	IFlightService fservice;
	
	@Autowired
	IComplaintService compservice;

	@Autowired
	IFeedbackService feedservice;
	
	@Autowired
	IPassengerDetailsService pservice;
	
	@Autowired
	IMealService mservice;
	
	@Autowired
	ITicketService tservice;
	
	@Autowired
	ICityService cService;
	
	
	@PostMapping
	public User getUser(@RequestBody User user) {
		User newuser = uservice.findUserByEmail(user.getEmail());
		return newuser;
	}
	// get list of tickets for particular user
	@GetMapping("/{email}")
	public Set<Ticket> getListOfTickets(@PathVariable String email){
		User user = uservice.findUserByEmail(email);
		return user.getTickets();
	}
	
	// To see the user details by its email
	@PostMapping("/userDetails")
	public User userDetails(@RequestBody User user){
		User uDetails = uservice.findUserByEmail(user.getEmail());
		return uDetails;
		
	}
	
	// adding new User
	@PostMapping("/adduser")
	public String addUser(@RequestBody User newUser) {
		newUser.setRole(Role.ROLE_USER);
		String mesg = uservice.addUser(newUser);
		return mesg;
	}
	
	// Updating new User
	@PutMapping("/updateUser")
	public String updateUser(@RequestBody User user) {
		uservice.updateUser(user,user.getEmail());
		return "Updated successfully";
	}
	
//	@PutMapping("/updatemobile")
//	public String updateMobile(@RequestBody User user) {
//		String mesg = uservice.updateMobileNumber(user);
//		return mesg;
//	}
	
	@PutMapping("/updatepassword")
	public String updateMobile(@RequestBody User user) {
		String mesg = uservice.updatePassword(user);
		return mesg;
	}
	
//	@PostMapping("/allflights")
//	public List<FlightDto> getAllFlights(@RequestBody SourceAndDestinationDto srcAndDest){
//		List<Flight> flights = fservice.getAllFlights(srcAndDest.getSource(), srcAndDest.getDestination());
//		return flights.stream().map(f-> new FlightDto(f.getSource(), f.getDestination(), f.getDoj(), f.getArrivalTime(), 
//				f.getDepartureTime(), f.getEconomyPrice(), f.getBusinessPrice(), f.getFirstclassPrice(), f.getLayoverLocation(), 
//				f.getLayoverDuration())).collect(Collectors.toList());
//	}
	
	// here we can return id of flight and and when user clicks on 
	// any flight link id is passed in the url
	@PostMapping("/allflightswithdoj")
	public List<FlightDto> getAllFlightsWithDoj(@RequestBody SourceAndDestinationDto srcAndDest){
		List<Flight> flights = fservice.getAllFlightsWithDoj(srcAndDest.getSource(), srcAndDest.getDestination(), srcAndDest.getDoj());
		if(srcAndDest.getTravellerClass().equals("ECO")) {
			return flights.stream().map(f-> new FlightDto(f.getId(),f.getSource(),f.getDestination(),f.getDoj(),f.getArrivalTime(),
					f.getDepartureTime(),f.getEconomyPrice(),f.getLayoverLocation(),f.getLayoverDuration())).collect(Collectors.toList());
		}
		else if(srcAndDest.getTravellerClass().equals("BUS")) {
			return flights.stream().map(f-> new FlightDto(f.getId(),f.getSource(),f.getDestination(),f.getDoj(),f.getArrivalTime(),
					f.getDepartureTime(),f.getLayoverLocation(),f.getBusinessPrice(),f.getLayoverDuration())).collect(Collectors.toList());
		}
		else if(srcAndDest.getTravellerClass().equals("FIR")) {
			return flights.stream().map(f-> new FlightDto(f.getId(),f.getSource(),f.getDestination(),f.getDoj(),f.getArrivalTime(),
					f.getDepartureTime(),f.getLayoverLocation(),f.getLayoverDuration(),f.getFirstclassPrice())).collect(Collectors.toList());
		}
		return null;
	}
	// yet to decide 
//	@PostMapping("/selectedflight")
//	public FlightDto getSelectedFlight(@RequestBody Flight flight) {
//		Flight selectedFlight = fservice.getSelectedFlight(flight);
//		FlightDto newFlight = new FlightDto(selectedFlight.getId(),selectedFlight.getSource(), selectedFlight.getDestination(), selectedFlight.getDoj(), 
//				selectedFlight.getArrivalTime(), selectedFlight.getDepartureTime(), selectedFlight.getEconomyPrice(), 
//				selectedFlight.getBusinessPrice(), selectedFlight.getFirstclassPrice(), selectedFlight.getLayoverLocation(), 
//				selectedFlight.getLayoverDuration()); 
//		return newFlight;
//	}
	@PostMapping("/selectedflight")
	public FlightDto getSelectedFlight(@RequestBody FlightDto flight) {
		
		return flight;
	}
	///////////////////////////////////////////////////////////////////
	
//	@PostMapping("/passengers")
//	public PassengerDetails getPassenger(@RequestBody PassengerDetails passenger) {
//		return pservice.addNewPassenger(passenger);
//	}
//	
//	@GetMapping("/finalpassengerlist")
//	public List<PassengerDetails> getPassengerList(){
//		//int x = 0;
//		Flight flight = frepo.findById(11).orElseThrow();
//		User user = urepo.findById("au@134").orElseThrow();
//		List<PassengerDetails> plist = pservice.getPassengerList();
//		//Set<PassengerDetails> pset = plist.stream().collect(Collectors.toSet());
//		Ticket t = new Ticket();
//		t.setFlight(flight);
//		t.setUser(user);
////		t.setPassengers(pset);
//		Ticket savedTicket = trepo.save(t);
//		for(PassengerDetails p:plist) {
////			t.setSeats(++x);
//			p.setTicket(t);
//			prepo.save(p);
//		}
//		return plist;	
//	}
	////////////////////////////////////////////////////////////////
	@PostMapping("/passengerdetails/{fid}")
	public PassengerDetailsDto addPassengers(@RequestBody PassengerDetailsDto passDetails,
									@PathVariable int fid) {
		Meal meal = mservice.getMealById(passDetails.getMeal().getId());//changes
		PassengerDetails passenger = new PassengerDetails(passDetails.getAadhar(), passDetails.getFname(), passDetails.getLname(), 
				passDetails.getAge(), passDetails.getMobile(), passDetails.getGender(), passDetails.getLuggage(), passDetails.getSeatno(), 
				passDetails.getSeatClass(), meal, null);
		String mesg = pservice.addPassenger(passenger,fid,passDetails.getTravellerClass());
		return passDetails;
	}
	
	@PostMapping("/passengerDetailsList/{fId}")
	public List<PassengerDetailsDto> addPassengerList(@RequestBody List<PassengerDetailsDto> passengerList, @PathVariable int fId)
	{
		Iterator<PassengerDetailsDto> passengerIterator = passengerList.iterator();
		
		while(passengerIterator.hasNext())
		{
			PassengerDetailsDto pDto = passengerIterator.next();
			Meal meal = mservice.getMealById(pDto.getMeal().getId());//changes
			PassengerDetails passenger = new PassengerDetails(pDto.getAadhar(), pDto.getFname(), pDto.getLname(), 
					pDto.getAge(), pDto.getMobile(), pDto.getGender(), pDto.getLuggage(), pDto.getSeatno(), 
					pDto.getSeatClass(), meal, null);
			String mesg = pservice.addPassenger(passenger,fId,pDto.getTravellerClass());
		}
		
		
		return passengerList; 
	}
	
	
	
//	@PostMapping("/bookticket/{fid}")
//	public PassengerTicketDto bookTicket(@RequestBody PassengerTicketDto passTicketDetails,
//								@PathVariable int fid) {
//		Flight flight = fservice.getFlightById(fid);
//		User user = uservice.findUserByEmail(passTicketDetails.getEmail());
//		Ticket ticket = new Ticket(passTicketDetails.getSeat(), passTicketDetails.getGst(), passTicketDetails.getDiscount(), 
//										user, flight);
//		Ticket newTicket = tservice.addTicket(ticket);
//		PassengerTicketDto passenger = new PassengerTicketDto(ticket.getId(), passTicketDetails.getAadhar(), passTicketDetails.getAge(), 
//											passTicketDetails.getFname(), passTicketDetails.getGender(), passTicketDetails.getLname(), 
//											passTicketDetails.getLuggage(), passTicketDetails.getMeal(), passTicketDetails.getMobile(), 
//											passTicketDetails.getSeatClass(), passTicketDetails.getSeatno(), ticket.getSeats(), ticket.getGst(), 
//											ticket.getDiscount(), user.getEmail());
//		return passenger;
//		
//	}
	
	// Generating tickets
	@PostMapping("/bookticket/{fid}")
	public TicketDto bookTicket(@PathVariable int fid,@RequestBody EmailClassDto edto) {
		Flight flight = fservice.getFlightById(fid);
		User user = uservice.findUserByEmail(edto.getEmail());
		List<PassengerDetails> plist = pservice.getPassengerList();
		Ticket ticket = new Ticket();
		ticket.setUser(user);
		ticket.setFlight(flight);
		Ticket savedTicket = trepo.save(ticket);
		TicketDto tdto = new TicketDto();
		
		tdto.setSource(ticket.getFlight().getSource());
		tdto.setDestination(ticket.getFlight().getDestination());
		tdto.setDiscount(10);
		tdto.setGst(18);
		int x = 0;
		for(PassengerDetails p:plist) {
			if(p.getTicket()== null) {
				x++;
				p.setTicket(ticket);
				prepo.save(p);
			}
		}
		tdto.setSeats(x);
		float price = 0.0f;
		if(edto.getFlightClass().equals("BUS")) {
			 price = ((x*flight.getBusinessPrice())*0.9f) + ((x*flight.getBusinessPrice())*0.18f) ;
		}
		else if(edto.getFlightClass().equals("FIR")) {
			 price = ((x*flight.getFirstclassPrice())*0.9f) + ((x*flight.getFirstclassPrice())*0.18f) ;
		}
		if(edto.getFlightClass().equals("ECO")) {
			 price = ((x*flight.getEconomyPrice())*0.9f) + ((x*flight.getEconomyPrice())*0.18f) ;
		}
		tdto.setTotalprice(price);
		
		ticket.setDiscount(tdto.getDiscount());
		ticket.setGst(tdto.getGst());
		ticket.setSeats(tdto.getSeats());
		trepo.save(ticket);
		return tdto;
		
	}
/////////////////////////////////////////////////////////////////////////////////
	@PostMapping("/allcomplaints")
	public List<ComplaintDto> getAllComplaints(@RequestBody User user){
		List<Complaint> complaints = compservice.getAllComplaints(user);
		return complaints.stream().map(c-> new ComplaintDto(c.getTitle(), c.getDescription(), c.getStatus())).collect(Collectors.toList());
	}
	
	@PostMapping("/addcomplaint")
	public String addComplaint(@RequestBody ComplaintDto complaint) {
		String mesg = compservice.addComplaint(complaint);
		return mesg;
	}
	
	@PostMapping("/deletecomplaint")
	public String deleteComplaint(@RequestBody Complaint complaint) {
		String mesg = compservice.deleteComplaint(complaint);
		return mesg;
	}
	
	@PutMapping("/updatecomplaint")
	public String updateComplaint(@RequestBody Complaint complaint) {
		String mesg = compservice.updateComplaint(complaint);
		return mesg;
	}
	
	@PostMapping("/allfeedbacks")
	public List<FeedbackDto> getAllFeedbacks(@RequestBody User user){
		List<Feedback> feedbacks = feedservice.getAllFeedbacks(user);
		List<FeedbackDto> ret = feedbacks.stream().map(f-> new FeedbackDto(f.getId(), f.getTitle(), f.getDescription(), user.getEmail())).collect(Collectors.toList());
		return ret;
	}
	
	@PostMapping("/addfeedback")
	public String addFeedback(@RequestBody FeedbackDto feedback) {
		String mesg = feedservice.addFeedback(feedback);
		return mesg;
	}
	
	@PostMapping("/deletefeedback")
	public String deleteFeedback(@RequestBody Feedback feedback) {
		String mesg = feedservice.deleteFeedback(feedback);
		return mesg;
	}
	
	@PostMapping("/updatefeedback")
	public String updateFeedback(@RequestBody Feedback feedback) {
		String mesg = feedservice.updateFeedback(feedback);
		return mesg;
	}
	
	@GetMapping("/allusers")
	public List<UserDto> getAllUsers(){
		List<User> users = uservice.getAllUsers();
		return users.stream().map(c-> new UserDto(c.getFirstName(), c.getLastName(), c.getEmail(), c.getPassword(), 
				c.getRole(), c.getDob(), c.getMobile(), c.getGender())).collect(Collectors.toList());
	}
	
	// find user by email
	@PostMapping("/email")
	public User findByEmail(@RequestBody UserDto email) {
		
		User user = uservice.findUserByEmail(email.getEmail());
		return user;
	}
	
	@GetMapping("/home")
	public List<City> getCities()
	{
		List<City> cities = cService.getAllCities();
		return cities;
	}

}
