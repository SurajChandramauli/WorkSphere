package com.hu22.producttrack.deloittenetworkingapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hu22.producttrack.deloittenetworkingapp.dtos.CarPoolDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.CarPoolDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
import com.hu22.producttrack.deloittenetworkingapp.repositories.CarPoolRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.UserRepository;
import com.hu22.producttrack.deloittenetworkingapp.utils.ObjectMapperUtils;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;

@Service
public class CarPoolService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	CarPoolRepository carPoolRepository;

	public ResponseEntity<ResponseWrapper<CarPoolDto>> createCarPool(CarPoolDto carPoolDto) {
		Optional<UserDo> existingUser = userRepository.findByDeloitteEmail(carPoolDto.getDeloitteEmail());
		if (!existingUser.isPresent()) {
			return new ResponseEntity<>(
					new ResponseWrapper<>("Given Deloitte_Employee_Email is not present in the system!", null),
					HttpStatus.BAD_REQUEST);
		}
		Optional<CarPoolDo> existingCarPoolUser = carPoolRepository.findByDeloitteEmail(carPoolDto.getDeloitteEmail());
		if (existingCarPoolUser.isPresent()) {
			return new ResponseEntity<>(new ResponseWrapper<>("User's previous car pool already exists. ", null),
					HttpStatus.BAD_REQUEST);
		}
		CarPoolDo carPoolDo = ObjectMapperUtils.mapCarPoolDtoToDo(carPoolDto);
		carPoolDo = carPoolRepository.save(carPoolDo);
		CarPoolDto carPoolDtoReturned = ObjectMapperUtils.mapCarPoolDoToDto(carPoolDo);
		return new ResponseEntity(new ResponseWrapper<>("Successfully car pool created in db", carPoolDtoReturned),
				HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseWrapper<Void>> deletePool(int poolId) {
		Optional<CarPoolDo> existingPool = carPoolRepository.findById(poolId);
		if (!existingPool.isPresent()) {
			return new ResponseEntity(
					new ResponseWrapper<>("This car pool with given poolId is not present in system!", null),
					HttpStatus.NOT_FOUND);
		}
		carPoolRepository.deleteById(poolId);
		return ResponseEntity.ok(new ResponseWrapper<>("Car pool successfully deleted", null));

	}

	public ResponseEntity<ResponseWrapper<List<CarPoolDto>>> getAllPools() {
		List<CarPoolDo> carPoolList = carPoolRepository.findAll();
//        List<CarPoolDo> carPoolList = carPoolRepository.findAll(Sort.by(Sort.Direction.ASC, "leaveTime"));
		if (carPoolList.isEmpty()) {
			return new ResponseEntity<>(new ResponseWrapper<>("No users found in the system!", null),
					HttpStatus.NOT_FOUND);
		}
		List<CarPoolDto> carPoolDtoList = ObjectMapperUtils.mapAllCarPoolDoToDto(carPoolList);
		return ResponseEntity.ok(new ResponseWrapper<>("Success", carPoolDtoList));
	}

	public ResponseEntity<ResponseWrapper<CarPoolDto>> updatePoolSeats(int poolId) {

		Optional<CarPoolDo> existingCarPoolUser = carPoolRepository.findById(poolId);
		if (!existingCarPoolUser.isPresent()) {
			return new ResponseEntity<>(
					new ResponseWrapper<>("No car pool with given id is present in the system. ", null),
					HttpStatus.BAD_REQUEST);
		}
		int vacant_seats = Integer.parseInt(existingCarPoolUser.get().getVacantSeats());
		if (vacant_seats == 1) {
			carPoolRepository.deleteById(poolId);
			return ResponseEntity
					.ok(new ResponseWrapper<>("Car pool successfully deleted as no seats were left", null));
		}
		String set_seats = String.valueOf(vacant_seats - 1);
		existingCarPoolUser.get().setVacantSeats(set_seats);
		CarPoolDo carPoolDo = carPoolRepository.save(existingCarPoolUser.get());
		CarPoolDto carPoolDtoReturned = ObjectMapperUtils.mapCarPoolDoToDto(carPoolDo);
		return new ResponseEntity(new ResponseWrapper<>("Vacant seats successfully updated in db", carPoolDtoReturned),
				HttpStatus.CREATED);
	}

}
