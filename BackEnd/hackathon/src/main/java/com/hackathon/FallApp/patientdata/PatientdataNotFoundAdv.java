package com.hackathon.FallApp.patientdata;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@ControllerAdvice

public class PatientdataNotFoundAdvice {
	
	@ResponseBody
	  @ExceptionHandler(PatientdataNotFoundException.class)
	  @ResponseStatus(HttpStatus.NOT_FOUND)
	  String PatientNotFoundHandler(PatientdataNotFoundException ex) {
	    return ex.getMessage();
	  }
}
