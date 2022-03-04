package com.hackathon.FallApp.treatment;

public class TreatmentNotFoundException extends RuntimeException {
	
	TreatmentNotFoundException(Long id) {
	    super("Could not find treatment" + id);
	  }

}
