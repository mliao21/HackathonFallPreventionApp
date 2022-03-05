package com.hackathon.FallApp.Patientdata;

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
public class Patientdata {
	
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long dataid;
	private int patientid;
	private String date;
	private String time;
	private int pupil;
	private double temperature;
	private String bloodpressure;
	private int pulse;
	private String oxygensaturation;
	private String verbalresponse;
}
