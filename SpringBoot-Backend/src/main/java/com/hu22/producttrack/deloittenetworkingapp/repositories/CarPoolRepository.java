package com.hu22.producttrack.deloittenetworkingapp.repositories;

import java.util.Optional;

import com.hu22.producttrack.deloittenetworkingapp.entites.CarPoolDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarPoolRepository extends JpaRepository<CarPoolDo, Integer> {

    Optional<CarPoolDo> findByDeloitteEmail(String deloitteEmail);
}