package com.hackathon.FallApp.medication;

public class MedicationNotFoundException extends RuntimeException {
	
	MedicationNotFoundException(Long id) {
	    super("Could not find medication" + id);
	}
}
