package com.hu22.producttrack.deloittenetworkingapp.controllers;

import java.util.List;

import com.hu22.producttrack.deloittenetworkingapp.dtos.CarPoolDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.services.CarPoolService;
import com.hu22.producttrack.deloittenetworkingapp.services.UserService;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class CarPoolController {

    @Autowired
    CarPoolService carPoolService;

    @PostMapping("/createPool")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<CarPoolDto>> createCarPool(@RequestBody CarPoolDto carPoolDto) {
        return carPoolService.createCarPool(carPoolDto);
    }

    @DeleteMapping("/deletePool/{poolId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Void>> deletePool(@PathVariable int poolId) {
        return carPoolService.deletePool(poolId);
    }

    @GetMapping("/allPools")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<CarPoolDto>>> getAllPools() {
        return carPoolService.getAllPools();
    }

    @PutMapping("/updatePoolSeats/{poolId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<CarPoolDto>> updatePoolSeats(@PathVariable int poolId) {
        return carPoolService.updatePoolSeats(poolId);
    }


}

