package com.hu22.producttrack.deloittenetworkingapp.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CarPoolDto {
	private int poolId;
	private String userName;
	private String deloitteEmail;
	private String vacantSeats;
	private String officeLocation;
	private String destination;
	private String leaveTime;
	private String gender;
}
