package com.hackathon.FallApp.patient;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice

public class PatientNotFoundAdvice {
	
	@ResponseBody
	  @ExceptionHandler(PatientNotFoundException.class)
	  @ResponseStatus(HttpStatus.NOT_FOUND)
	  String PatientNotFoundHandler(PatientNotFoundException ex) {
	    return ex.getMessage();
	  }
	
}
