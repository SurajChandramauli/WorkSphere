package com.hu22.producttrack.deloittenetworkingapp.entites;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "POSTS")
public class PostDo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POST_ID")
    private Long postId;

    @Column(name = "USER_ID", nullable = false)
    private Integer userId;

    @Column(name = "USER_NAME", nullable = false)
    private String userName;

    @Column(name = "TYPE")
    private String type;

    @Column(name = "OFFICE_LOCATION")
    private String officeLocation;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "POST_IMG_URL")
    private String postImgUrl;

    @Column(name = "VOTE", columnDefinition ="bigint default 0")
    private Long vote;

    @Column(name = "D_VOTE", columnDefinition = "bigint default 0")
    private Long dVote;

    @Column(name = "POST_TIME_STAMP")
    @CreationTimestamp
    private Timestamp postTimeStamp;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<CommentDo> comments=new ArrayList<>();
}
