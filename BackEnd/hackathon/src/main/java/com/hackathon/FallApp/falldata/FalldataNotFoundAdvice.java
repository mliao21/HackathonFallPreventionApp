package com.hackathon.FallApp.Falldata;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class FalldataNotFoundAdvice {
	
	@ResponseBody
	  @ExceptionHandler(FalldataNotFoundException.class)
	  @ResponseStatus(HttpStatus.NOT_FOUND)
	  String FallDataNotFoundHandler(FalldataNotFoundException ex) {
	    return ex.getMessage();
	  }
	
}
