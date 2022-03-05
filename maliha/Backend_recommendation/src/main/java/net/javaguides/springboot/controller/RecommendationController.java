package net.javaguides.springboot.controller;

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

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Recommendation;
import net.javaguides.springboot.repository.RecommendationRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RecommendationController {

	@Autowired
	private RecommendationRepository recRepository;
	
	// get all recs
	@GetMapping("/recs")
	public List<Recommendation> getAllRecommendations(){
		return recRepository.findAll();
	}		
	
	// create rec rest api
	@PostMapping("/recs")
	public Recommendation createRecommendation(@RequestBody Recommendation rec) {
		return recRepository.save(rec);
	}
	
	// get rec by id rest api
	@GetMapping("/recs/{id}")
	public ResponseEntity<Recommendation> getRecommendationById(@PathVariable Long id) {
		Recommendation rec = recRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Recommendation not exist with id :" + id));
		return ResponseEntity.ok(rec);
	}
	
	// update rec rest api
	
	@PutMapping("/recs/{id}")
	public ResponseEntity<Recommendation> updateRecommendation(@PathVariable Long id, @RequestBody Recommendation recDetails){
		Recommendation rec = recRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Recommendation not exist with id :" + id));
		
		rec.setFropScore(recDetails.getFropScore());
		rec.setRiskFactor(recDetails.getRiskFactor());
		rec.setRecommendation(recDetails.getRecommendation());
		
		Recommendation updatedRecommendation = recRepository.save(rec);
		return ResponseEntity.ok(updatedRecommendation);
	}
	
	// delete rec rest api
	@DeleteMapping("/recs/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteRecommendation(@PathVariable Long id){
		Recommendation rec = recRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Recommendation not exist with id :" + id));
		
		recRepository.delete(rec);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
