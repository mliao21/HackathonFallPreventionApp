package com.hackathon.FallApp.comment;

import java.util.List;

public interface CommentDAO{
	
	int save(Comment comment);
	int update(Comment comment, int id);
	int delete(int id);
	List<Comment> getAll();
	Comment getByID(int id);
}
