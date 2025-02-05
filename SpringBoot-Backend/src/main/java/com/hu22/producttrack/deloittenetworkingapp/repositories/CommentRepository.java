package com.hu22.producttrack.deloittenetworkingapp.repositories;

import com.hu22.producttrack.deloittenetworkingapp.entites.CommentDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<CommentDo,Long> {
}
