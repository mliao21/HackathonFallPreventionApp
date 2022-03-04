package com.hackathon.FallApp.treatment;
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
public class Treatment{

	// private @Id @GeneratedValue Long id;
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long treatmentid;
	private int patientid;
	private int medicationid;
	private int recomendationid;
	
}	
	
	
