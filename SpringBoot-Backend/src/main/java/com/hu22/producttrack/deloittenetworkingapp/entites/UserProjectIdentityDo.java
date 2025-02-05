package com.hu22.producttrack.deloittenetworkingapp.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class UserProjectIdentityDo implements Serializable {
    @Column(name = "EMP_ID",nullable = false)
    int empId;

    @Column(name = "PROJECT_ID",nullable = false)
    int projectId;
}
