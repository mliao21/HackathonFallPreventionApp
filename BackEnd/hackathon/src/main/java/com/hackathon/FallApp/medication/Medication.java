package com.hackathon.FallApp.medication;
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
public class Medication{

	// private @Id @GeneratedValue Long id;
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long medicationid;
	private int patientid;
	private String name;
	private String prescriptionDate;
}	
	
	