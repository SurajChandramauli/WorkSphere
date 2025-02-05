package com.hu22.producttrack.deloittenetworkingapp.entites;

import javax.persistence.*;

import java.sql.Timestamp;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.OffsetDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PROJECTS")
public class ProjectDo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PROJECT_ID")
    private int projectId;

    @Column(name = "PROJECT_NAME")
    private String projectName;

    @Column(name = "PROJECT_DESCRIPTION")
    private String projectDescription;

    @Column(name = "SKILL_SET")
    private String skillSet;

    @Column(name = "DOMAIN_SPECIFIC")
    private String domainSpecific;

    @Column(name = "BAND_LEVEL_REQ")
    private String bandLevelReq;

    @Column(name = "DESIGNATION_REQ")
    private String designationReq;

    @Column(name = "START_DATE_OF_PROJECT")
    private String startDateOfProject;

    @Column(name = "CREATED_BY_ID")
    private int createdById;

    @Column(name = "CREATED_BY_NAME")
    private String createdByName;

    @Column(name = "CREATED_AT")
    @CreationTimestamp
    private Timestamp createdAt;

    @Column(name = "STILL_OPEN")
    private String stillOpen;
}
