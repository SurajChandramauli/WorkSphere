package com.hu22.producttrack.deloittenetworkingapp.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDto {
	private int userId;
	private String deloitteEmpId;
	private String name;
	private String deloitteEmail;
	private String dateOfJoining;
	private String dateOfBirth;
	private String department;
	private String band;
	private String designation;
	private String reportingManager;
	private String officeLocation;
	private String address;
	private String primarySkill;
	private String allSkills;
	private String profileImgUrl;
	private String linkedInUrl;
	private boolean onProject;
	private String personalEmail;
	private String phoneNumber;
	private int totalExp;
	private String aboutMe;
	private String hobbies;
	private String password;
	private String gender;
	private String domainExpertise;
	private String transport;
}
