package com.hackathon.FallApp.comment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class CommentController{

	@Autowired
	private CommentDAO aDAO;
	
	@GetMapping("/comments")
	public List<Comment> getComments(){
		return aDAO.getAll();
	}
	
	@GetMapping("/comments/{id}")
	public Comment getCommentByID(@PathVariable int id) {
		return aDAO.getByID(id);
	}
	
	@PostMapping("/comments")
	public ResponseEntity<?> saveComment(@RequestBody Comment comment) {
		aDAO.save(comment);
		return ResponseEntity.ok("Comment added");
	}
	
	@PutMapping("comment/{id}")
	public String updateComment(@RequestBody Comment comment, @PathVariable int id) {
		return aDAO.update(comment, id) + " rows updated to DB";
	}
	
	@DeleteMapping("comment/{id}")
	public String deleteComment(@PathVariable int id) {
		return aDAO.delete(id) + " rows deleted from DB";
	}
	
}
