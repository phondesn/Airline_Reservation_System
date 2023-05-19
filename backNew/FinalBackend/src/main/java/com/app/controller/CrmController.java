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

import com.app.pojos.Complaint;
import com.app.pojos.Feedback;
import com.app.service.IComplaintService;
import com.app.service.IFeedbackService;

@CrossOrigin
@RestController
@RequestMapping("/crm")
public class CrmController {
	
	@Autowired
	private IComplaintService compservice;
	
	@Autowired
	private IFeedbackService feedservice;
	
	@GetMapping("/complaints")
	public List<Complaint> getAllComplaints(){
		List<Complaint> list = compservice.getAllComplaints();
		return list;
	}
	
	@GetMapping("/feedbacks")
	public List<Feedback> getAllFeedbacks(){
		List<Feedback> list = feedservice.getAllFeedbacks();
		return list;
	}
	
	@PostMapping("/complaints/{cid}")
	public String changeComplaintStatus(@PathVariable int cid, @RequestBody Complaint complaint)
	{
		String mesg = compservice.chngCmplntSts(cid,complaint);
		return mesg;
	}
	
}
