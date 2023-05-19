package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserWithCFTdto;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.service.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/Admin")
public class SuperAdminController {
	
	@Autowired
	IUserService uService;
	
	//Show List of all users(Including CRM and flight admin)
	@GetMapping("/Users")
	public List<User> showUsersList()
	{
		List<User> userList = uService.getAllUsers();
//		List<UserDto> userDtoList = uService.getAllUsersDto();
		
		return userList;
	}
	
	//Get the List of details of all users(Includes Ticket, feedback and complaint details)
	@GetMapping("/Users/{id}")
	public UserWithCFTdto userWithCFT(@PathVariable String id)
	{
		User user = uService.findUserByEmail(id);
		
		UserWithCFTdto userWithCFT = new UserWithCFTdto(user, user.getTickets(), user.getFeedbacks(), user.getComplaints());
		
		return userWithCFT;
	}
	
	//Giving the Authorities to the CRM and flight admin(By changing the role of the user)
	@PostMapping("/Users/{id}")
	public String changeRole(@PathVariable String id, @RequestBody User user)
	{
		return uService.changeRole(user, id);
	}
	
//	//Get the list of the users based on the role(Customer, CRM, Flight admin)	
	@GetMapping("/Usersbyrole/{role}")
	public List<User> listByRole(@PathVariable String role)
	{
	
		return uService.getAllUsersByRole(Role.valueOf(role));
	}
	
	
}
