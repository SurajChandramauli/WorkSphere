package com.hu22.producttrack.deloittenetworkingapp.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FollowDto {
	private int empId;
	private int followedById;
	private String empName;
	private String followedByName;
}
