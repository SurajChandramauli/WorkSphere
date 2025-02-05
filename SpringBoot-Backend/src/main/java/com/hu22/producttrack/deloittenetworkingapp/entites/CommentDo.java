package com.hu22.producttrack.deloittenetworkingapp.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "COMMENTS")
public class CommentDo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "COMMENT_ID")
	private Long commentId;

	@Column(name = "POST")
	private Long post;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "userId")
//    private UserDo author;

	@Column(name = "AUTHOR_ID")
	private int authorId;

	@Column(name = "AUTHOR_NAME")
	private String authorName;

	@Column(name = "COMMENT")
	private String comment;
}
