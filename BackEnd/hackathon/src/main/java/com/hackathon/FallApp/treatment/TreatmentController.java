package com.hackathon.FallApp.treatment;

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
public class TreatmentController {

	@Autowired
	private TreatmentDAO aDAO;
	
	@GetMapping("/treatments")
	public List<Treatment> getTreatments(){
		return aDAO.getAll();
	}
	
	@GetMapping("/treatments/{id}")
	public Treatment getTreatmentByID(@PathVariable int id) {
		return aDAO.getByID(id);
	}
	
	
	@PostMapping("/treatments")
	public ResponseEntity<?> saveTreatment(@RequestBody Treatment treatment) {
		aDAO.save(treatment);
		return ResponseEntity.ok("Treatment registered successfully!");
	}
	
	@PutMapping("treatments/{id}")
	public String updateTreatment(@RequestBody Treatment treatment, @PathVariable int id) {
		return aDAO.update(treatment, id) + " rows updated to DB";
	}
	
	@DeleteMapping("treatments/{id}")
	public String deleteTreatment(@PathVariable int id) {
		return aDAO.delete(id) + " rows deleted from DB";
	}
	
}
