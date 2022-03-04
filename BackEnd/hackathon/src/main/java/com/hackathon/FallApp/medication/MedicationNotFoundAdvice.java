package com.hackathon.FallApp.medication;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice

public class MedicationNotFoundAdvice {
	
	 @ResponseBody
	  @ExceptionHandler(MedicationNotFoundException.class)
	  @ResponseStatus(HttpStatus.NOT_FOUND)
	  String MedicationNotFoundHandler(MedicationNotFoundException ex) {
	    return ex.getMessage();
	  }

}
