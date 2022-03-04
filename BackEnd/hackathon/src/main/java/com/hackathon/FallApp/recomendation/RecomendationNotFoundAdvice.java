package com.hackathon.FallApp.recomendation;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice

public class RecomendationNotFoundAdvice {
	
	 @ResponseBody
	  @ExceptionHandler(RecomendationNotFoundException.class)
	  @ResponseStatus(HttpStatus.NOT_FOUND)
	  String RecomendationNotFoundHandler(RecomendationNotFoundException ex) {
	    return ex.getMessage();
	  }

}
