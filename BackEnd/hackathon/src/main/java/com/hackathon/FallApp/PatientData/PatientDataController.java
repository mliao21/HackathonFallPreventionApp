package com.hackathon.FallApp.PatientData;

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
public class PatientDataController {
	
	@Autowired
	private PatientDataDAO pdDAO;
	
	@GetMapping("/patientdata")
	public List<PatientData> getPatientData(){
		return pdDAO.getAll();
	}
	
	@GetMapping("/patientdata/{id}")
	public PatientData getPatientDataByID(@PathVariable int id) {
		return pdDAO.getByID(id);
	}
	
	
	@PostMapping("/patientdata")
	public ResponseEntity<?> savePatientData(@RequestBody PatientData PatientData) {
		pdDAO.save(PatientData);
		return ResponseEntity.ok("PatientData registered successfully!");
	}
	
	@PutMapping("patientdata/{id}")
	public String updatePatientData(@RequestBody PatientData PatientData, @PathVariable int id) {
		return pdDAO.update(PatientData, id) + " rows updated to DB";
	}
	
	@DeleteMapping("patientdata/{id}")
	public String deletePatientDatadata(@PathVariable int id) {
		return pdDAO.delete(id) + " rows deleted from DB";
	}
	
	
}
