package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ComplaintDto;
import com.app.pojos.Complaint;
import com.app.pojos.User;
import com.app.repo.ComplaintRepo;
import com.app.repo.UserRepo;


@Service
public class ComplaintServiceImpl implements IComplaintService {
	
	@Autowired
	ComplaintRepo comprepo;
	
	@Autowired
	UserRepo urepo;

	//Get all the complaint related to one perticular Customer(For Cusotmer)
	@Override
	public List<Complaint> getAllComplaints(User user) {
		List<Complaint> complaints = comprepo.findByUserComplaint(user);
		return complaints;
	}

	//Add  a new complaint by the customer
	@Override
	public String addComplaint(ComplaintDto complaint) {
		User user = urepo.findById(complaint.getEmail()).orElseThrow();
		Complaint newcomplaint = new Complaint(complaint.getTitle(), complaint.getDescription(), complaint.getStatus(), user);
		comprepo.save(newcomplaint);
		return "Added complaint";
	}

	//Delete existing complaint by the customer
	@Override
	public String deleteComplaint(Complaint complaint) {
		Complaint oldcomplaint = comprepo.findById(complaint.getId()).orElseThrow();
		comprepo.delete(oldcomplaint);
		return "Deleted successfully";
	}

	//Update the complaint by only updating its STATUS(For CRM)
	@Override
	public String updateComplaint(Complaint complaint) {
		Complaint oldComplaint = comprepo.findById(complaint.getId()).orElseThrow();
		oldComplaint.setTitle(complaint.getTitle());
		oldComplaint.setDescription(complaint.getDescription());
		oldComplaint.setStatus(complaint.getStatus());
		comprepo.save(oldComplaint);
		return "Updated complaint";
	}

	@Override
	public List<Complaint> getAllComplaints() {
		List<Complaint> list = comprepo.findAll();
	return list;
	}

	@Override
	public String chngCmplntSts(int cId, Complaint complaint) {

		Complaint chngStsComplaint = comprepo.findById(cId).orElseThrow(()-> new RuntimeException());
		chngStsComplaint.setStatus(complaint.getStatus());
		comprepo.save(chngStsComplaint);
		return "Status Changed";
	}

}
