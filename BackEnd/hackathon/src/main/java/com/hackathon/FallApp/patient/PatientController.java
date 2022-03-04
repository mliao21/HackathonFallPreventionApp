package com.hackathon.FallApp.patient;

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
public class PatientController {
	
	@Autowired
	private PatientDAO pDAO;
	
	@GetMapping("/patients")
	public List<Patient> getPatients(){
		return pDAO.getAll();
	}
	
	@GetMapping("/patients/{id}")
	public Patient getPatientByID(@PathVariable int id) {
		return pDAO.getByID(id);
	}
	
	
	@PostMapping("/patients")
	public ResponseEntity<?> savePatients(@RequestBody Patient patient) {
		pDAO.save(patient);
		return ResponseEntity.ok("Patient registered successfully!");
	}
	
	@PutMapping("patients/{id}")
	public String updatePatient(@RequestBody Patient patient, @PathVariable int id) {
		return pDAO.update(patient, id) + " rows updated to DB";
	}
	
	@DeleteMapping("patients/{id}")
	public String deletePatients(@PathVariable int id) {
		return pDAO.delete(id) + " rows deleted from DB";
	}
	
	
}
