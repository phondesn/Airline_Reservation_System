package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.dto.FeedbackDto;
import com.app.pojos.Feedback;
import com.app.pojos.User;
import com.app.repo.FeedbackRepo;
import com.app.repo.UserRepo;


@Service
public class FeedbackServiceImpl implements IFeedbackService {
	
	@Autowired
	FeedbackRepo frepo;
	
	@Autowired
	UserRepo urepo;

	//Get all the feedback related to one perticular Customer(For Cusotmer)
	@Override
	public List<Feedback> getAllFeedbacks(User user) {
		List<Feedback> feedbacks = frepo.findByUserFeedback(user);
		return feedbacks;
	}

	//Add  a new Feedback by the customer
	@Override
	public String addFeedback(FeedbackDto feedback) {
		User user = urepo.findById(feedback.getEmail()).orElseThrow();
		Feedback newfeedback = new Feedback(feedback.getTitle(), feedback.getDescription(), user);
		frepo.save(newfeedback);
		return "Feedback added";
	}

	//Delete existing Feedback by the customer
	@Override
	public String deleteFeedback(Feedback feedback) {
		Feedback oldfeedback = frepo.findById(feedback.getId()).orElseThrow();
		frepo.delete(oldfeedback);
		return "feedback deleted successfully";
	}

	//Update the Feedback by the customer
	@Override
	public String updateFeedback(Feedback feedback) {
		Feedback oldfeedback = frepo.findById(feedback.getId()).orElseThrow();
		oldfeedback.setTitle(feedback.getTitle());
		oldfeedback.setDescription(feedback.getDescription());
		frepo.save(oldfeedback);
		return "feedback updated successfully";
	}

	@Override
	public List<Feedback> getAllFeedbacks() {
		return frepo.findAll();
	}


}
