package com.hu22.producttrack.deloittenetworkingapp.repositories;

import java.util.List;
import com.hu22.producttrack.deloittenetworkingapp.entites.FollowDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.FollowIdentityDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface FollowRepository extends JpaRepository<FollowDo, FollowIdentityDo> {

    @Query("SELECT f FROM FollowDo f WHERE f.followIdentityDo.empId = :userId")
    List<FollowDo>findAllFollowers(int userId);

    @Query("SELECT f FROM FollowDo f WHERE f.followIdentityDo.followedById = :userId")
    List<FollowDo>findAllFollowing(int userId);
}
