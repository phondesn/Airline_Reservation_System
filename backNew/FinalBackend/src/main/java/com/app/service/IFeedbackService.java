package com.app.service;

import java.util.List;

import com.app.dto.FeedbackDto;
import com.app.pojos.Feedback;
import com.app.pojos.User;

public interface IFeedbackService {

	List<Feedback> getAllFeedbacks(User user);
	
	String addFeedback(FeedbackDto feedback);
	
	String deleteFeedback(Feedback feedback);
	
	String updateFeedback(Feedback feedback);

	List<Feedback> getAllFeedbacks();
}
