package com.hu22.producttrack.deloittenetworkingapp.services;

import com.hu22.producttrack.deloittenetworkingapp.dtos.ProjectDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.ProjectDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
import com.hu22.producttrack.deloittenetworkingapp.repositories.ProjectRepository;
import com.hu22.producttrack.deloittenetworkingapp.repositories.UserRepository;
import com.hu22.producttrack.deloittenetworkingapp.utils.ObjectMapperUtils;
import com.hu22.producttrack.deloittenetworkingapp.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    UserRepository userRepository;

    public ResponseEntity<ResponseWrapper<ProjectDto>>createProject(ProjectDto projectDto){
        Optional<UserDo>existingUser=userRepository.findById(projectDto.getCreatedById());
        if(!existingUser.isPresent()){
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Given User does not exist in the system", null),
                    HttpStatus.BAD_REQUEST);
        }
        ProjectDo projectDo= ObjectMapperUtils.mapProjectDtoToDo(projectDto);
        projectDo=projectRepository.save(projectDo);
        ProjectDto projectDtoReturned=ObjectMapperUtils.mapProjectDoToDto(projectDo);
        return new ResponseEntity(new ResponseWrapper<>("Project successfully Added in db", projectDtoReturned),
                HttpStatus.CREATED);

    }

    public ResponseEntity<ResponseWrapper<ProjectDto>>updateProject(int projectId,ProjectDto projectDto){
        Optional<ProjectDo>existingProject=projectRepository.findById(projectId);
        if(!existingProject.isPresent()){
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Given Project does not exist in the system", null),
                    HttpStatus.BAD_REQUEST);
        }
        ProjectDo projectDo=new ProjectDo();
        if(projectDto.getProjectName()!=null)
            projectDo.setProjectName(projectDto.getProjectName());
        else
            projectDo.setProjectName(existingProject.get().getProjectName());

        if(projectDto.getProjectDescription()!=null)
            projectDo.setProjectDescription(projectDto.getProjectDescription());
        else
            projectDo.setProjectDescription(existingProject.get().getProjectDescription());

        if(projectDto.getSkillSet()!=null)
            projectDo.setSkillSet(projectDto.getSkillSet());
        else
            projectDo.setSkillSet(existingProject.get().getSkillSet());

        if (projectDto.getDomainSpecific()!=null)
            projectDo.setDomainSpecific(projectDto.getDomainSpecific());
        else
            projectDo.setDomainSpecific(existingProject.get().getDomainSpecific());
        if (projectDto.getBandLevelReq()!=null)
            projectDo.setBandLevelReq(projectDto.getBandLevelReq());
        else
            projectDo.setBandLevelReq(existingProject.get().getBandLevelReq());

        if(projectDto.getDesignationReq()!=null)
            projectDo.setDesignationReq(projectDto.getDesignationReq());

        else
            projectDo.setDesignationReq(existingProject.get().getDesignationReq());

        if(projectDto.getStartDateOfProject()!=null)
            projectDo.setStartDateOfProject(projectDto.getStartDateOfProject());
        else
            projectDo.setStartDateOfProject(existingProject.get().getStartDateOfProject());
        if(projectDto.getStillOpen()!=null)
            projectDo.setStillOpen(projectDto.getStillOpen());
        else
            projectDo.setStillOpen(existingProject.get().getStillOpen());

        projectDo.setProjectId(projectId);
        projectDo.setCreatedById(existingProject.get().getCreatedById());
        projectDo.setCreatedByName(existingProject.get().getCreatedByName());
        projectDo.setCreatedAt(existingProject.get().getCreatedAt());


        projectDo=projectRepository.save(projectDo);
        ProjectDto projectDtoReturned=ObjectMapperUtils.mapProjectDoToDto(projectDo);
        return new ResponseEntity(new ResponseWrapper<>("Successfully updated in db", projectDtoReturned),
                HttpStatus.CREATED);
    }

    public ResponseEntity<ResponseWrapper<Void>> deleteProject(int projectId) {
        Optional<ProjectDo> existingProject = projectRepository.findById(projectId);
        if (!existingProject.isPresent()) {
            return new ResponseEntity(
                    new ResponseWrapper<>("Project with given projectId is not present in system!", null),
                    HttpStatus.NOT_FOUND);
        }
        projectRepository.deleteById(projectId);
        return ResponseEntity.ok(new ResponseWrapper<>("Project successfully deleted", null));
    }

    public ResponseEntity<ResponseWrapper<List<ProjectDto>>> allProjects() {
        List<ProjectDo> projectDoList = projectRepository.findAll();
        if (projectDoList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("No projects found in the system!", null),
                    HttpStatus.NOT_FOUND);
        }
        List<ProjectDto> projectDtoList = ObjectMapperUtils.mapAllProjectsDoToDto(projectDoList);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", projectDtoList));
    }

    public ResponseEntity<ResponseWrapper<List<ProjectDto>>> allProjectsByCreatedBy(int createdById) {
        List<ProjectDo> projectDoList = projectRepository.findByCreatedBy(createdById);
        if (projectDoList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("This user has NOT created any projects", null),
                    HttpStatus.NOT_FOUND);
        }
        List<ProjectDto> projectDtoList = ObjectMapperUtils.mapAllProjectsDoToDto(projectDoList);
        return ResponseEntity.ok(new ResponseWrapper<>("Success", projectDtoList));
    }

    public ResponseEntity<ResponseWrapper<ProjectDto>> getProjectById(int projectId) {
        Optional<ProjectDo> existingProject = projectRepository.findById(projectId);
        if (!existingProject.isPresent()) {
            return new ResponseEntity<>(
                    new ResponseWrapper<>("Project with given project id doesn't exists", null),
                    HttpStatus.NOT_FOUND);
        }
        ProjectDto projectDtoReturned =
                ObjectMapperUtils.mapProjectDoToDto(existingProject.get());
        return ResponseEntity.ok(new ResponseWrapper<>("Success", projectDtoReturned));
    }

}
