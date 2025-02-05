package com.hu22.producttrack.deloittenetworkingapp.controllers;

import com.hu22.producttrack.deloittenetworkingapp.dtos.FollowDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.ProjectDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
import com.hu22.producttrack.deloittenetworkingapp.services.UserProjectService;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class UserProjectController {
    @Autowired
    UserProjectService userProjectService;

    @PostMapping("/nominateCandidate/{empId}/{projectId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Void>> nominateCandidate(@PathVariable int empId,
                                                                  @PathVariable int projectId) {

        return userProjectService.nominateCandidate(empId,projectId);
    }

    @GetMapping("/getAllUsersByProjectId/{projectId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<UserDto>>> getAllUsersByProjectId(@PathVariable int projectId) {

        return userProjectService.getAllUsersByProjectId(projectId);
    }

    @GetMapping("/getAllProjectsByuserId/{empId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<ProjectDto>>> getAllProjectsByuserId(@PathVariable int empId) {

        return userProjectService.getAllProjectsByuserId(empId);
    }

    @DeleteMapping("/admin-delete")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Void>> adminDelete(){
        return userProjectService.adminDelete();
    }

}
