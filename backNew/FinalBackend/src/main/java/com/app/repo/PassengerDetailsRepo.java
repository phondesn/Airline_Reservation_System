package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.PassengerDetails;

@Repository
public interface PassengerDetailsRepo extends JpaRepository<PassengerDetails, Long> {

}
