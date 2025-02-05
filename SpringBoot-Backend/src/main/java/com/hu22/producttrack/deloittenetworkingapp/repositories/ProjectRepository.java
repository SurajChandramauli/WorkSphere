package com.hu22.producttrack.deloittenetworkingapp.repositories;

import com.hu22.producttrack.deloittenetworkingapp.entites.ProjectDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectDo,Integer> {

    @Query("select p from ProjectDo p where p.createdById=?1 order by p.createdAt DESC")
    List<ProjectDo>findByCreatedBy(int createdById);

    @Query("SELECT p FROM ProjectDo p WHERE p.projectId= :projectId ")
    ProjectDo findByProjectId(int projectId);
}
