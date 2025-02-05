package com.hu22.producttrack.deloittenetworkingapp.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "USERS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private int userId;

    @Column(name = "DELOITTE_EMP_ID", unique = true)
    private String deloitteEmpId;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DELOITTE_EMAIL", unique = true)
    private String deloitteEmail;

    @Column(name = "DATE_OF_JOINING")
    private String dateOfJoining;

    @Column(name = "DATE_OF_BIRTH")
    private String dateOfBirth;

    @Column(name = "DEPARTMENT")
    private String department;

    @Column(name = "BAND")
    private String band;

    @Column(name = "DESIGNATION")
    private String designation;

    @Column(name = "REPORTING_MANAGER")
    private String reportingManager;

    @Column(name = "OFFICE_LOCATION")
    private String officeLocation;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "PRIMARY_SKILL")
    private String primarySkill;

    @Column(name = "ALL_SKILLS")
    private String allSkills;

    @Column(name = "PROFILE_IMG_URL")
    private String profileImgUrl;

    @Column(name = "LINKEDIN_URL")
    private String linkedInUrl;

    @Column(name = "ON_PROJECT")
    private boolean onProject;

    @Column(name = "PERSONAL_EMAIL")
    private String personalEmail;

    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;

    //previous experience in years
    @Column(name = "TOTAL_EXP")
    private int totalExp;

    @Column(name = "ABOUT_ME")
    private String aboutMe;

    @Column(name = "HOBBIES")
    private String hobbies;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name="GENDER")
    private String gender;

    @Column(name="DOMAIN_EXPERTISE")
    private String domainExpertise;

    @Column(name="TRANSPORT")
    private String transport;

}

