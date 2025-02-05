package com.hu22.producttrack.deloittenetworkingapp.repositories;

import java.util.List;
import java.util.Optional;

import com.hu22.producttrack.deloittenetworkingapp.beans.ProjectI;
import com.hu22.producttrack.deloittenetworkingapp.beans.StatisticI;
import com.hu22.producttrack.deloittenetworkingapp.entites.UserDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserDo, Integer> {
    Optional<UserDo> findByDeloitteEmpId(String deloitteEmpId);

    Optional<UserDo> findByDeloitteEmail(String deloitteEmail);

    @Query("SELECT u FROM UserDo u WHERE u.userId = :userId")
    UserDo findByEmployeeId(int userId);

    @Query(value = "SELECT primary_skill, count(*) as cnt from users GROUP BY primary_skill", nativeQuery = true)
    List<StatisticI> getSkillStatistics();

    @Query(value = "SELECT u.on_project, count(*) as cnt from users u GROUP BY u.on_project;", nativeQuery = true)
    List<ProjectI> getOnProjectStatistics();

    @Query(value = "SELECT u.primary_skill, count(*) as cnt from users u where on_project=True GROUP BY u.primary_skill", nativeQuery = true)
    List<StatisticI> getOnProjectSkillStatistics();

    @Query(value = "SELECT u.primary_skill, count(*) as cnt from users u where on_project=False GROUP BY u.primary_skill", nativeQuery = true)
    List<StatisticI> getOffProjectSkillStatistics();
}