package com.hu22.producttrack.deloittenetworkingapp.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Table(name = "FOLLOW")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FollowDo {
    @EmbeddedId
    FollowIdentityDo followIdentityDo;

    @Column(name = "EMP_NAME")
    private String empName;

    @Column(name = "FOLLOWED_BY_NAME")
    private String followedByName;
}
