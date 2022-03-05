package com.hackathon.FallApp.Patientdata;

public class PatientdataNotFoundException extends RuntimeException{
	
	PatientdataNotFoundException(Long id) {
	    super("Could not find patient data" + id);
	  }
}
