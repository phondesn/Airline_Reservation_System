package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.repo.ComplaintRepo;
import com.app.repo.FeedbackRepo;
import com.app.repo.UserRepo;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	UserRepo urepo;
	
	@Autowired
	FeedbackRepo frepo;
	
	@Autowired
	ComplaintRepo comprepo;
	
	//Register new customer(User) (For customer)
	@Override
	public String addUser(User user) {
		urepo.save(user);
		return "Added";

	}

	//Get all the list of all the users(For the CRM)
	@Override
	public List<User> getAllUsers() {
		List<User> users = urepo.findAll();
		return users;
	}

	//Update the User details by the Customer(For Customer)
	@Override
	public String updateUser(User user,String email) {
		User oldUser = urepo.findById(email).orElseThrow();
		oldUser.setDob(user.getDob());
	//	oldUser.setEmail(user.getEmail());
		oldUser.setFirstName(user.getFirstName());
//		oldUser.setGender(user.getGender());
		oldUser.setLastName(user.getLastName());
		oldUser.setMobile(user.getMobile());
		urepo.save(oldUser);
		return "Updated successfully";
	}

	//Update the User Mobile number only by the Customer(For Customer)
	@Override
	public String updateMobileNumber(User user) {
		User oldUser = urepo.findById(user.getEmail()).orElseThrow();
		oldUser.setMobile(user.getMobile());
		urepo.save(oldUser);
		return "updated";
	}

	//Update the User Password number only by the Customer(For Customer)
	@Override
	public String updatePassword(User user) {
		User oldUser = urepo.findById(user.getEmail()).orElseThrow();
		oldUser.setPassword(user.getPassword());
		urepo.save(oldUser);
		return "updated";
	}

	//Fetch the user by his email(ID)
	@Override
	public User findUserByEmail(String email) {
		User user = urepo.findById(email).orElseThrow();
		return user;
	}

	//Change the Authority of the User(CRM and Flight Admin)(For Super Admin)
	@Override
	public String changeRole(User user, String id) {

		User userToChangeRole = urepo.findById(id).orElseThrow(()-> new RuntimeException());
		userToChangeRole.setRole(user.getRole());
		urepo.save(userToChangeRole);
		return "Role changed successfully";
	}

	//Get List of all the Users By his role(For Super Admin)
	@Override
	public List<User> getAllUsersByRole(Role role) {
		
		List<User> userByRole = urepo.findByRole(role);
		
		return userByRole;
		
	}


}
