package com.hackathon.FallApp.treatment;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice

public class TreatmentNotFoundAdvice {
	
	 @ResponseBody
	  @ExceptionHandler(TreatmentNotFoundException.class)
	  @ResponseStatus(HttpStatus.NOT_FOUND)
	  String TreatmentNotFoundHandler(TreatmentNotFoundException ex) {
	    return ex.getMessage();
	  }

}
