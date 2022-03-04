package com.hackathon.FallApp.FallData;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FallData {
	
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long fallid;
	private int patientid;
	private int fropscore;
	private String fropdate;
	
}
