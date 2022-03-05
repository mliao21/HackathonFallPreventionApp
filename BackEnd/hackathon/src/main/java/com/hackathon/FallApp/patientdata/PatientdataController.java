package com.hackathon.FallApp.patientdata;

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
public class PatientdataController {
	
	@Autowired
	private PatientdataDAO pdDAO;
	
	@GetMapping("/patientdata")
	public List<Patientdata> getPatientData(){
		return pdDAO.getAll();
	}
	
	@GetMapping("/patientdata/{id}")
	public Patientdata getPatientDataByID(@PathVariable int id) {
		return pdDAO.getByID(id);
	}

	@GetMapping("/patientdata/{id}/latest")
	public Patientdata getPatientDataByPatientIDLatest(@PathVariable int id) {
		return pdDAO.getByPatientIDLatest(id);
	}
	
	
	@PostMapping("/patientdata")
	public ResponseEntity<?> savePatientData(@RequestBody Patientdata PatientData) {
		pdDAO.save(PatientData);
		return ResponseEntity.ok("PatientData registered successfully!");
	}
	
	@PutMapping("patientdata/{id}")
	public String updatePatientData(@RequestBody Patientdata PatientData, @PathVariable int id) {
		return pdDAO.update(PatientData, id) + " rows updated to DB";
	}
	
	@DeleteMapping("patientdata/{id}")
	public String deletePatientDatadata(@PathVariable int id) {
		return pdDAO.delete(id) + " rows deleted from DB";
	}
	
	
}
