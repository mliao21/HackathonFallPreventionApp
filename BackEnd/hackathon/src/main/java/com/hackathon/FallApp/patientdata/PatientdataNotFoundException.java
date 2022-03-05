package com.hackathon.FallApp.patientdata;

public class PatientdataNotFoundException extends RuntimeException{
	
	PatientdataNotFoundException(Long id) {
	    super("Could not find patient data" + id);
	  }
}
