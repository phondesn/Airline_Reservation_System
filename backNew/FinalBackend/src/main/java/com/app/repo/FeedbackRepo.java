package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Feedback;
import com.app.pojos.User;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

	List<Feedback> findByUserFeedback(User user);
	
}
