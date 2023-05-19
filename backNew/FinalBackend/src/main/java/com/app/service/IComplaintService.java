package com.app.service;

import java.util.List;

import com.app.dto.ComplaintDto;
import com.app.pojos.Complaint;
import com.app.pojos.User;

public interface IComplaintService {

	List<Complaint> getAllComplaints(User user);
	
	String addComplaint(ComplaintDto complaint);
	
	String deleteComplaint(Complaint complaint);
	
	String updateComplaint(Complaint complaint);
	
	List<Complaint> getAllComplaints();
	
	String chngCmplntSts(int cId, Complaint complaint);
}
