package com.hackathon.FallApp.medication;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MedicationController {

	@Autowired
	private MedicationRepository medRepository;
	
	// get all meds
	@GetMapping("/meds")
	public List<Medication> getAllMedications(){
		return medRepository.findAll();
	}		
	
	// create med rest api
	@PostMapping("/meds")
	public Medication createMedication(@RequestBody Medication med) {
		return medRepository.save(med);
	}
	
	// get med by id rest api
	@GetMapping("/meds/{id}")
	public ResponseEntity<Medication> getMedicationById(@PathVariable Long id) {
		Medication med = medRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medication not exist with id :" + id));
		return ResponseEntity.ok(med);
	}
	
	// update med rest api
	
	@PutMapping("/meds/{id}")
	public ResponseEntity<Medication> updateMedication(@PathVariable Long id, @RequestBody Medication medDetails){
		Medication med = medRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medication not exist with id :" + id));
		
		med.setFropScore(medDetails.getFropScore());
		med.setRiskFactor(medDetails.getRiskFactor());
		med.setMedication(medDetails.getMedication());
		
		Medication updatedMedication = medRepository.save(med);
		return ResponseEntity.ok(updatedMedication);
	}
	
	// delete med rest api
	@DeleteMapping("/meds/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMedication(@PathVariable Long id){
		Medication med = medRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medication not exist with id :" + id));
		
		medRepository.delete(med);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
