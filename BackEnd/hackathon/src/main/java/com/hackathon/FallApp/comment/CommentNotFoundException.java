package com.hackathon.FallApp.comment;

public class CommentNotFoundException extends RuntimeException {
	
	CommentNotFoundException(Long id) {
	    super("Could not find comment" + id);
	}
}
