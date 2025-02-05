package com.hu22.producttrack.deloittenetworkingapp.dtos;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import com.hu22.producttrack.deloittenetworkingapp.entites.CommentDo;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostDto {

	private Long postId;

	private String description;

	private String officeLocation;

	private String postImgUrl;

	private Timestamp postTimeStamp;

	private String type;

	private Integer userId;

	private String userName;

	private Long vote;

	private Long dVote;

	private List<CommentDo> comments = new ArrayList<>();
}
