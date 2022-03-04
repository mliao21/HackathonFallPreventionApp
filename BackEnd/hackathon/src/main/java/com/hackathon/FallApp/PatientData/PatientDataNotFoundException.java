package com.hackathon.FallApp.PatientData;

public class PatientDataNotFoundException extends RuntimeException{
	
	PatientDataNotFoundException(Long id) {
	    super("Could not find patient data" + id);
	  }
}
