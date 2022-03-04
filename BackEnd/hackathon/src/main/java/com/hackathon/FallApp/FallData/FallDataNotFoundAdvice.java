package com.hackathon.FallApp.FallData;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class FallDataNotFoundAdvice {
	
	@ResponseBody
	  @ExceptionHandler(FallDataNotFoundException.class)
	  @ResponseStatus(HttpStatus.NOT_FOUND)
	  String FallDataNotFoundHandler(FallDataNotFoundException ex) {
	    return ex.getMessage();
	  }
	
}
