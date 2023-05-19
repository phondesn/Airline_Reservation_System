package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Aeroplane;

public interface AeroplaneRepo extends JpaRepository<Aeroplane,String> {
}
