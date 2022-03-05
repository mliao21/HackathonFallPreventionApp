package com.hackathon.FallApp.falldata;

public class FalldataNotFoundException extends RuntimeException{
	
	FalldataNotFoundException(Long id) {
	    super("Could not find fall data " + id);
	  }
	
	
}
