package com.hu22.producttrack.deloittenetworkingapp.controllers;

import java.util.List;

import com.hu22.producttrack.deloittenetworkingapp.beans.Project;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.beans.Statistic;
import com.hu22.producttrack.deloittenetworkingapp.services.UserService;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<UserDto>> createUser(@RequestBody UserDto userDto) {
        return userService.createUser(userDto);
    }

    @PutMapping("/users/{userId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<UserDto>> updateUser(@PathVariable int userId,
                                                               @RequestBody UserDto userDto) {
        return userService.updateUser(userId, userDto);
    }

    @DeleteMapping("/users/{userId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Void>> deleteUser(@PathVariable int userId) {
        return userService.deleteUser(userId);
    }

    @GetMapping("/allUsers")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<UserDto>>> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{userId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<UserDto>> getUserById(@PathVariable int userId) {
        return userService.getUserById(userId);
    }

    @PostMapping("/login")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<UserDto>> userLogin(@RequestBody UserDto userDto) {
        return userService.userLogin(userDto);
    }

    @GetMapping("/skillStatistics")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public List<Statistic> fetchSkillStatistics(){
        return userService.fetchSkillStatistics();
    }

    @GetMapping("/onProjectStatistics")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public List<Project> fetchOnProjectStatistics(){
        return userService.fetchOnProjectStatistics();
    }

    @GetMapping("/onProjectSkillStatistics")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public List<Statistic> fetchOnProjectSkillStatistics(){
        return userService.fetchOnProjectSkillStatistics();
    }

    @GetMapping("/offProjectSkillStatistics")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public List<Statistic> fetchOffProjectSkillStatistics(){
        return userService.fetchOffProjectSkillStatistics();
    }

    @GetMapping("/points/{userId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Long>> getUserPoints(@PathVariable int userId) {
        return userService.getUserPoints(userId);
    }
}

