package com.hackathon.FallApp.recomendation;
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
public class Recomendation {

	// private @Id @GeneratedValue Long id;
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long recomendationid;
	private String type;
	private String details;
	private String date;
	
}	
	
	
