package com.hu22.producttrack.deloittenetworkingapp.repositories;

import com.hu22.producttrack.deloittenetworkingapp.entites.PostDo;
import com.hu22.producttrack.deloittenetworkingapp.entites.ProjectDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<PostDo,Long> {

    @Query("SELECT p FROM PostDo p where p.userId=?1")
    List<PostDo> findByUserId(int userId);

}
