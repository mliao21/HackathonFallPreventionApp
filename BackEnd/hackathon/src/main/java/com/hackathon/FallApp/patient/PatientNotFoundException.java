package com.hackathon.FallApp.patient;

public class PatientNotFoundException extends RuntimeException{
	
	PatientNotFoundException(Long id) {
	    super("Could not find patient " + id);
	  }
	
}
