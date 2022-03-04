package com.hackathon.FallApp.PatientData;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@ControllerAdvice

public class PatientDataNotFoundAdvice {
	
	@ResponseBody
	  @ExceptionHandler(PatientDataNotFoundException.class)
	  @ResponseStatus(HttpStatus.NOT_FOUND)
	  String PatientNotFoundHandler(PatientDataNotFoundException ex) {
	    return ex.getMessage();
	  }
}
