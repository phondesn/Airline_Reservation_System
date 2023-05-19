package com.app.service;

import java.util.List;
import com.app.pojos.Role;
import com.app.pojos.User;

public interface IUserService {

	String addUser(User user);
	
	List<User> getAllUsers();
	
	List<User> getAllUsersByRole(Role role);
	
	String updateUser(User user,String email);
	
	String updateMobileNumber(User user);
	
	String updatePassword(User user);
	
	User findUserByEmail(String email);
	
	String changeRole(User user, String id);
}
