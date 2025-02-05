package com.hu22.producttrack.deloittenetworkingapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hu22.producttrack.deloittenetworkingapp.dtos.ProjectDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.ProjectDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserProjectDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserProjectIdentityDo;
import com.hu22.producttrack.deloittenetworkingapp.repositories.ProjectRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.UserProjectRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.UserRepository;
import com.hu22.producttrack.deloittenetworkingapp.utils.ObjectMapperUtils;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;

@Service
public class UserProjectService {

	@Autowired
	UserProjectRepository userProjectRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	ProjectRepository projectRepository;

	public ResponseEntity<ResponseWrapper<Void>> nominateCandidate(int empId, int projectId) {
		Optional<UserDo> existingEmp = userRepository.findById(empId);
		Optional<ProjectDo> existingProject = projectRepository.findById(projectId);

		if (!existingEmp.isPresent() || !existingProject.isPresent()) {
			return new ResponseEntity<>(
					new ResponseWrapper<>("Either the employee or the project is not present in the db", null),
					HttpStatus.BAD_REQUEST);
		}

		UserProjectIdentityDo compositeKey = new UserProjectIdentityDo(empId, projectId);
		Optional<UserProjectDo> existingConnection = userProjectRepository.findById(compositeKey);
		if (existingConnection.isPresent()) {
			return new ResponseEntity<>(new ResponseWrapper<>("User has already applied to this project", null),
					HttpStatus.BAD_REQUEST);
		}
		UserProjectDo userProjectDo = new UserProjectDo();
		userProjectDo.setUserProjectIdentityDo(compositeKey);

		userProjectDo = userProjectRepository.save(userProjectDo);
		return new ResponseEntity(new ResponseWrapper<>("User has successfully been nominated for this project", null),
				HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseWrapper<List<UserDto>>> getAllUsersByProjectId(int projectId) {

		List<UserProjectDo> userProjectDos = userProjectRepository.findAllUsers(projectId);

		if (userProjectDos.isEmpty()) {
			return ResponseEntity.ok(new ResponseWrapper<>("No user has applied on this project !", null));
		}
		List<UserDo> users = new ArrayList<>();
		for (UserProjectDo userId : userProjectDos) {
			UserDo userDo = userRepository.findByEmployeeId(userId.getUserProjectIdentityDo().getEmpId());
			users.add(userDo);
//            System.out.println("User ID: " + userId);
		}
		List<UserDto> userDtos = ObjectMapperUtils.mapAllUserDoToDto(users);
		return ResponseEntity.ok(new ResponseWrapper<>("Success", userDtos));

	}

	public ResponseEntity<ResponseWrapper<List<ProjectDto>>> getAllProjectsByuserId(int empId) {
		List<UserProjectDo> userProjectDos = userProjectRepository.findAllProjects(empId);

		if (userProjectDos.isEmpty()) {
			return ResponseEntity.ok(new ResponseWrapper<>("This user has NOT applied to any project!", null));
		}
		List<ProjectDo> projects = new ArrayList<>();
		for (UserProjectDo projectId : userProjectDos) {
			ProjectDo projectDo = projectRepository
					.findByProjectId(projectId.getUserProjectIdentityDo().getProjectId());
			projects.add(projectDo);
//            System.out.println("User ID: " + userId);
		}
		List<ProjectDto> projectDtos = ObjectMapperUtils.mapAllProjectsDoToDto(projects);
		return ResponseEntity.ok(new ResponseWrapper<>("Success", projectDtos));

	}

	public ResponseEntity<ResponseWrapper<Void>> adminDelete() {
		List<UserProjectDo> existingLinks = userProjectRepository.findAll();
		if (existingLinks.isEmpty()) {
			return new ResponseEntity(new ResponseWrapper<>("No links present", null), HttpStatus.NOT_FOUND);
		}
		userProjectRepository.deleteAll();
		return ResponseEntity.ok(new ResponseWrapper<>("All links deleted", null));

	}

}
