package com.hackathon.FallApp.FallData;

public class FallDataNotFoundException extends RuntimeException{
	
	FallDataNotFoundException(Long id) {
	    super("Could not find fall data " + id);
	  }
	
	
}
