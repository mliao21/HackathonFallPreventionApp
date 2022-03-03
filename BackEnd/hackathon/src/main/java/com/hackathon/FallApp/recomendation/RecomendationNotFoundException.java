package com.hackathon.FallApp.recomendation;

public class RecomendationNotFoundException extends RuntimeException {
	
	RecomendationNotFoundException(Long id) {
	    super("Could not find recomendation" + id);
	  }

}
