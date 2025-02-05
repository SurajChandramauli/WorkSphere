package com.hu22.producttrack.deloittenetworkingapp.dtos;

import java.sql.Timestamp;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProjectDto {
	private int projectId;
	private String projectName;
	private String projectDescription;
	private String skillSet;
	private String domainSpecific;
	private String bandLevelReq;
	private String designationReq;
	private String startDateOfProject;
	private int createdById;
	private String createdByName;
	private Timestamp createdAt;
	private String stillOpen;
}