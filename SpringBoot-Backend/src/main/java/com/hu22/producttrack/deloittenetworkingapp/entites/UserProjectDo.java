package com.hu22.producttrack.deloittenetworkingapp.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "USER_PROJECT_CONNECTION")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserProjectDo {
    @EmbeddedId
    UserProjectIdentityDo userProjectIdentityDo;
}
