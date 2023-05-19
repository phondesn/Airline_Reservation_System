package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Complaint;
import com.app.pojos.User;

@Repository
public interface ComplaintRepo extends JpaRepository<Complaint, Integer> {

	List<Complaint> findByUserComplaint(User user);
}
