package com.hu22.producttrack.deloittenetworkingapp.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CommentDto {

	private Long commentId;

	private Long post;

//    private UserDo author;

	private int authorId;

	private String authorName;

	private String comment;
}
