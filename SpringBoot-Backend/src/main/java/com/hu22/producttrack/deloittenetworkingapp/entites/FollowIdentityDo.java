package com.hu22.producttrack.deloittenetworkingapp.entites;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class FollowIdentityDo implements Serializable {
    @Column(name="EMP_ID",nullable = false)
    int empId;
    @Column(name = "FOLLOWED_BY_ID", nullable = false)
    int followedById;
}
