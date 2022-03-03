package com.hackathon.FallApp.medication;

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
public class MedicationController{

	@Autowired
	private MedicationDAO aDAO;
	
	@GetMapping("/medications")
	public List<Medication> getMedications(){
		return aDAO.getAll();
	}
	
	@GetMapping("/medications/{id}")
	public Medication getMedicationByID(@PathVariable int id) {
		return aDAO.getByID(id);
	}
	
	@PostMapping("/medications")
	public ResponseEntity<?> saveComment(@RequestBody Medication m) {
		aDAO.save(m);
		return ResponseEntity.ok("Medication added");
	}
	
	@PutMapping("medications/{id}")
	public String updateMedication(@RequestBody Medication m, @PathVariable int id) {
		return aDAO.update(m, id) + " rows updated to DB";
	}
	
	@DeleteMapping("medications/{id}")
	public String deleteMedication(@PathVariable int id) {
		return aDAO.delete(id) + " rows deleted from DB";
	}
}
