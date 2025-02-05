package com.hu22.producttrack.deloittenetworkingapp.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.hu22.producttrack.deloittenetworkingapp.dtos.CarPoolDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.CommentDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.FollowDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.PostDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.ProjectDto;
import com.hu22.producttrack.deloittenetworkingapp.dtos.UserDto;
import com.hu22.producttrack.deloittenetworkingapp.entites.CarPoolDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.CommentDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.FollowDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.FollowIdentityDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.PostDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.ProjectDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;

public class ObjectMapperUtils {

	public static UserDo mapUserDtoToUser(UserDto userDto) {
		UserDo user = new UserDo();
		user.setUserId(userDto.getUserId());
		user.setDeloitteEmpId(userDto.getDeloitteEmpId());
		user.setName(userDto.getName());
		user.setDeloitteEmail(userDto.getDeloitteEmail());
		user.setDateOfJoining(userDto.getDateOfJoining());
		user.setDateOfBirth(userDto.getDateOfBirth());
		user.setDepartment(userDto.getDepartment());
		user.setBand(userDto.getBand());
		user.setDesignation(userDto.getDesignation());
		user.setReportingManager(userDto.getReportingManager());
		user.setOfficeLocation(userDto.getOfficeLocation());
		user.setAddress(userDto.getAddress());
		user.setPrimarySkill(userDto.getPrimarySkill());
		user.setAllSkills(userDto.getAllSkills());
		user.setProfileImgUrl(userDto.getProfileImgUrl());
		user.setLinkedInUrl(userDto.getLinkedInUrl());
		user.setOnProject(userDto.isOnProject());
		user.setPersonalEmail(userDto.getPersonalEmail());
		user.setPhoneNumber(userDto.getPhoneNumber());
		user.setTotalExp(userDto.getTotalExp());
		user.setAboutMe(userDto.getAboutMe());
		user.setHobbies(userDto.getHobbies());
		user.setPassword(userDto.getPassword());
		user.setGender(userDto.getGender());
		user.setDomainExpertise(userDto.getDomainExpertise());
		user.setTransport(userDto.getTransport());
		return user;
	}

	public static UserDto mapUserDoToDto(UserDo userDo) {
		UserDto userDto = new UserDto();
		userDto.setUserId(userDo.getUserId());
		userDto.setDeloitteEmpId(userDo.getDeloitteEmpId());
		userDto.setName(userDo.getName());
		userDto.setDeloitteEmail(userDo.getDeloitteEmail());
		userDto.setDateOfJoining(userDo.getDateOfJoining());
		userDto.setDateOfBirth(userDo.getDateOfBirth());
		userDto.setDepartment(userDo.getDepartment());
		userDto.setBand(userDo.getBand());
		userDto.setDesignation(userDo.getDesignation());
		userDto.setReportingManager(userDo.getReportingManager());
		userDto.setOfficeLocation(userDo.getOfficeLocation());
		userDto.setAddress(userDo.getAddress());
		userDto.setPrimarySkill(userDo.getPrimarySkill());
		userDto.setAllSkills(userDo.getAllSkills());
		userDto.setProfileImgUrl(userDo.getProfileImgUrl());
		userDto.setLinkedInUrl(userDo.getLinkedInUrl());
		userDto.setOnProject(userDo.isOnProject());
		userDto.setPersonalEmail(userDo.getPersonalEmail());
		userDto.setPhoneNumber(userDo.getPhoneNumber());
		userDto.setTotalExp(userDo.getTotalExp());
		userDto.setAboutMe(userDo.getAboutMe());
		userDto.setHobbies(userDo.getHobbies());
		userDto.setPassword(userDo.getPassword());
		userDto.setGender(userDo.getGender());
		userDto.setDomainExpertise(userDo.getDomainExpertise());
		userDto.setTransport(userDo.getTransport());
		return userDto;
	}

	public static List<UserDto> mapAllUserDoToDto(List<UserDo> users) {
		List<UserDto> userDtos = new ArrayList<>();
		for (UserDo userDo : users) {
			userDtos.add(mapUserDoToDto(userDo));
		}
		return userDtos;
	}

	public static CarPoolDo mapCarPoolDtoToDo(CarPoolDto carPoolDto) {
		CarPoolDo carPoolDo = new CarPoolDo();
		carPoolDo.setPoolId(carPoolDto.getPoolId());
		carPoolDo.setUserName(carPoolDto.getUserName());
		carPoolDo.setDeloitteEmail(carPoolDto.getDeloitteEmail());
		carPoolDo.setVacantSeats(carPoolDto.getVacantSeats());
		carPoolDo.setOfficeLocation(carPoolDto.getOfficeLocation());
		carPoolDo.setDestination(carPoolDto.getDestination());
		carPoolDo.setLeaveTime(carPoolDto.getLeaveTime());
		carPoolDo.setGender(carPoolDto.getGender());
		return carPoolDo;
	}

	public static CarPoolDto mapCarPoolDoToDto(CarPoolDo carPoolDo) {
		CarPoolDto carPoolDto = new CarPoolDto();
		carPoolDto.setPoolId(carPoolDo.getPoolId());
		carPoolDto.setUserName(carPoolDo.getUserName());
		carPoolDto.setDeloitteEmail(carPoolDo.getDeloitteEmail());
		carPoolDto.setVacantSeats(carPoolDo.getVacantSeats());
		carPoolDto.setOfficeLocation(carPoolDo.getOfficeLocation());
		carPoolDto.setDestination(carPoolDo.getDestination());
		carPoolDto.setLeaveTime(carPoolDo.getLeaveTime());
		carPoolDto.setGender(carPoolDo.getGender());
		return carPoolDto;
	}

	public static List<CarPoolDto> mapAllCarPoolDoToDto(List<CarPoolDo> carPools) {
		List<CarPoolDto> carPoolDtos = new ArrayList<>();
		for (CarPoolDo carPoolDo : carPools) {
			carPoolDtos.add(mapCarPoolDoToDto(carPoolDo));
		}
		Collections.reverse(carPoolDtos);
		return carPoolDtos;
	}

	public static PostDo mapPostDtoToDo(PostDto postDto) {
		PostDo postDo = new PostDo();
		postDo.setPostId(postDto.getPostId());
		postDo.setDescription(postDto.getDescription());
		postDo.setOfficeLocation(postDto.getOfficeLocation());
		postDo.setPostImgUrl(postDto.getPostImgUrl());
		postDo.setPostTimeStamp(postDto.getPostTimeStamp());
		postDo.setType(postDto.getType());
		postDo.setUserId(postDto.getUserId());
		postDo.setUserName(postDto.getUserName());
		postDo.setVote(postDto.getVote());
		postDo.setDVote(postDto.getDVote());
		postDo.setComments(postDto.getComments());
		return postDo;
	}

	public static PostDto mapPostDoToDto(PostDo postDo) {
		PostDto postDto = new PostDto();
		postDto.setPostId(postDo.getPostId());
		postDto.setDescription(postDo.getDescription());
		postDto.setOfficeLocation((postDo.getOfficeLocation()));
		postDto.setPostImgUrl(postDo.getPostImgUrl());
		postDto.setPostTimeStamp(postDo.getPostTimeStamp());
		postDto.setType(postDo.getType());
		postDto.setUserId(postDo.getUserId());
		postDto.setUserName(postDo.getUserName());
		postDto.setVote(postDo.getVote());
		postDto.setDVote(postDo.getDVote());
		postDto.setComments(postDo.getComments());
		return postDto;
	}

	public static List<PostDto> mapAllPostDoToDto(List<PostDo> posts) {
		List<PostDto> postDtos = new ArrayList<>();
		for (PostDo postDo : posts) {
			postDtos.add(mapPostDoToDto(postDo));
		}
		Collections.reverse(postDtos);
		return postDtos;
	}

	public static CommentDo mapCommentDtoToDo(CommentDto commentDto) {
		CommentDo commentDo = new CommentDo();
		commentDo.setCommentId(commentDto.getCommentId());
		commentDo.setComment(commentDto.getComment());
		commentDo.setPost(commentDto.getPost());
//        commentDo.setAuthor(commentDto.getAuthor());
		commentDo.setAuthorId(commentDto.getAuthorId());
		commentDo.setAuthorName(commentDto.getAuthorName());
		return commentDo;
	}

	public static CommentDto mapCommentDoToDto(CommentDo commentDo) {
		CommentDto commentDto = new CommentDto();
		commentDto.setCommentId(commentDo.getCommentId());
		commentDto.setComment(commentDo.getComment());
		commentDto.setPost(commentDo.getPost());
//        commentDto.setAuthor(commentDo.getAuthor());
		commentDto.setAuthorId(commentDo.getAuthorId());
		commentDto.setAuthorName(commentDo.getAuthorName());
		return commentDto;
	}

	public static List<CommentDto> mapAllCommentDoToDto(List<CommentDo> comments) {
		List<CommentDto> commentDtos = new ArrayList<>();
		for (CommentDo commentDo : comments) {
			commentDtos.add(mapCommentDoToDto(commentDo));
		}
		return commentDtos;
	}

	public static FollowDto mapFollowDoToDto(FollowDo followDo) {
		FollowDto followDto = new FollowDto();
		followDto.setEmpId(followDo.getFollowIdentityDo().getEmpId());
		followDto.setFollowedById(followDo.getFollowIdentityDo().getFollowedById());
		followDto.setEmpName(followDo.getEmpName());
		followDto.setFollowedByName(followDo.getFollowedByName());
		return followDto;
	}

	public static FollowDo mapFollowDtoToDo(FollowDto followDto) {
		FollowDo followDo = new FollowDo();
		followDo.setEmpName(followDto.getEmpName());
		followDo.setFollowedByName(followDto.getFollowedByName());

		FollowIdentityDo followIdentityDo = new FollowIdentityDo();
		followIdentityDo.setEmpId(followDto.getEmpId());
		followIdentityDo.setFollowedById(followDto.getFollowedById());

		followDo.setFollowIdentityDo(followIdentityDo);
		return followDo;
	}

	public static List<FollowDto> mapAllFollowDoToDto(List<FollowDo> followDos) {
		List<FollowDto> followDtos = new ArrayList<>();
		for (FollowDo followDo : followDos) {
			followDtos.add(mapFollowDoToDto(followDo));
		}
		return followDtos;
	}

	public static ProjectDo mapProjectDtoToDo(ProjectDto projectDto) {
		ProjectDo projectDo = new ProjectDo();
		projectDo.setProjectId(projectDto.getProjectId());
		projectDo.setProjectName(projectDto.getProjectName());
		projectDo.setProjectDescription(projectDto.getProjectDescription());
		projectDo.setSkillSet(projectDto.getSkillSet());
		projectDo.setDomainSpecific(projectDto.getDomainSpecific());
		projectDo.setBandLevelReq(projectDto.getBandLevelReq());
		projectDo.setDesignationReq(projectDto.getDesignationReq());
		projectDo.setStartDateOfProject(projectDto.getStartDateOfProject());
		projectDo.setCreatedById(projectDto.getCreatedById());
		projectDo.setCreatedByName(projectDto.getCreatedByName());
		projectDo.setCreatedAt(projectDto.getCreatedAt());
		projectDo.setStillOpen(projectDto.getStillOpen());
		return projectDo;
	}

	public static ProjectDto mapProjectDoToDto(ProjectDo projectDo) {
		ProjectDto projectDto = new ProjectDto();
		projectDto.setProjectId(projectDo.getProjectId());
		projectDto.setProjectName(projectDo.getProjectName());
		projectDto.setProjectDescription(projectDo.getProjectDescription());
		projectDto.setSkillSet(projectDo.getSkillSet());
		projectDto.setDomainSpecific(projectDo.getDomainSpecific());
		projectDto.setBandLevelReq(projectDo.getBandLevelReq());
		projectDto.setDesignationReq(projectDo.getDesignationReq());
		projectDto.setStartDateOfProject(projectDo.getStartDateOfProject());
		projectDto.setCreatedById(projectDo.getCreatedById());
		projectDto.setCreatedByName(projectDo.getCreatedByName());
		projectDto.setCreatedAt(projectDo.getCreatedAt());
		projectDto.setStillOpen(projectDo.getStillOpen());
		return projectDto;
	}

	public static List<ProjectDto> mapAllProjectsDoToDto(List<ProjectDo> projectDos) {
		List<ProjectDto> projectDtos = new ArrayList<>();
		for (ProjectDo projectDo : projectDos) {
			projectDtos.add(mapProjectDoToDto(projectDo));
		}
		Collections.reverse(projectDtos);
		return projectDtos;
	}

}