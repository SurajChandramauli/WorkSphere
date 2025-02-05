package com.hu22.producttrack.deloittenetworkingapp.repositories;

import com.hu22.producttrack.deloittenetworkingapp.entites.UserProjectDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserProjectIdentityDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserProjectRepository extends JpaRepository<UserProjectDo, UserProjectIdentityDo> {
    @Query("SELECT u FROM UserProjectDo u WHERE u.userProjectIdentityDo.projectId = :projectId")
    List<UserProjectDo> findAllUsers(int projectId);

    @Query("SELECT u FROM UserProjectDo u WHERE u.userProjectIdentityDo.empId = :empId")
    List<UserProjectDo> findAllProjects(int empId);

}
