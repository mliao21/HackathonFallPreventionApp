package com.hackathon.FallApp.recomendation;

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
public class RecomendationController {

	@Autowired
	private RecomendationDAO aDAO;
	
	@GetMapping("/recomendations")
	public List<Recomendation> getRecomendations(){
		return aDAO.getAll();
	}
	
	@GetMapping("/recomendations/{id}")
	public Recomendation getRecomendationByID(@PathVariable int id) {
		return aDAO.getByID(id);
	}
	
	@PostMapping("/recomendations")
	public ResponseEntity<?> saveRecomendation(@RequestBody Recomendation r) {
		aDAO.save(r);
		return ResponseEntity.ok("Recomendation registered successfully!");
	}
	
	@PutMapping("recomendations/{id}")
	public String updateRecomendation(@RequestBody Recomendation r, @PathVariable int id) {
		return aDAO.update(r, id) + " rows updated to DB";
	}
	
	@DeleteMapping("recomendations/{id}")
	public String deleteRecomendation(@PathVariable int id) {
		return aDAO.delete(id) + " rows deleted from DB";
	}
	
}
