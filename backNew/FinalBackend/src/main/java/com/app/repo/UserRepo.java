package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;
import com.app.pojos.Role;

@Repository
public interface UserRepo extends JpaRepository<User, String> {
	
	List<User> findByRole(Role role);
}
