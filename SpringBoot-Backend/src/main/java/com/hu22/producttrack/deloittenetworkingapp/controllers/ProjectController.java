package com.hu22.producttrack.deloittenetworkingapp.controllers;

import com.hu22.producttrack.deloittenetworkingapp.dtos.ProjectDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.services.ProjectService;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @PostMapping("/createProject")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<ProjectDto>> createProject(@RequestBody ProjectDto projectDto){
        return projectService.createProject(projectDto);
    }

    @PutMapping("/updateProject/{projectId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<ProjectDto>> updateProject(@PathVariable int projectId,@RequestBody ProjectDto projectDto){
        return projectService.updateProject(projectId,projectDto);
    }

    @DeleteMapping("/deleteProject/{projectId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<Void>> deleteProject(@PathVariable int projectId){
        return projectService.deleteProject(projectId);
    }

    @GetMapping("/allProjects")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<ProjectDto>>> allProjects() {

        return projectService.allProjects();
    }

    @GetMapping("/allProjects/{createdById}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<List<ProjectDto>>> allProjectsByCreatedBy(@PathVariable int createdById) {

        return projectService.allProjectsByCreatedBy(createdById);
    }

    @GetMapping("/project/{projectId}")
    @CrossOrigin(origins = {"http://localhost:3000", "https://networking-frontend-urtjok3rza-wl.a.run.app"})
    public ResponseEntity<ResponseWrapper<ProjectDto>> getProjectById(@PathVariable int projectId) {
        return projectService.getProjectById(projectId);
    }
}
