package com.hackathon.FallApp.patient;

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
public class Patient {
	
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long patientid;
	private String name;
	private String bloodtype;
	private String sex;
	private int phn;
	private String diagnosis;
	private int weight;
	
}