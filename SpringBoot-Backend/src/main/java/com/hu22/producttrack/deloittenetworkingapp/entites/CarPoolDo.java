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
@Table(name = "CAR_POOL")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarPoolDo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "POOL_ID")
	private int poolId;

	@Column(name = "USERNAME")
	private String userName;

	@Column(name = "DELOITTE_EMAIL", unique = true)
	private String deloitteEmail;

	@Column(name = "VACANT_SEATS")
	private String vacantSeats;

	@Column(name = "OFFICE_LOCATION")
	private String officeLocation;

	@Column(name = "DESTINATION")
	private String destination;

	@Column(name = "LEAVE_TIME")
	private String leaveTime;

	@Column(name = "GENDER")
	private String gender;

}
