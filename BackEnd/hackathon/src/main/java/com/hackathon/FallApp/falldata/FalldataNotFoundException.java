package com.hackathon.FallApp.Falldata;

public class FalldataNotFoundException extends RuntimeException{
	
	FalldataNotFoundException(Long id) {
	    super("Could not find fall data " + id);
	  }
	
	
}
