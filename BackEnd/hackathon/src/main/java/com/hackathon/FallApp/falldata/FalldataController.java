package com.hackathon.FallApp.falldata;

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
public class FalldataController {
	
	@Autowired
	private FalldataDAO fDAO;
	
	@GetMapping("/fall")
	public List<Falldata> getFalls(){
		return fDAO.getAll();
	}
	
	@GetMapping("/fall/{id}")
	public Falldata getFallByID(@PathVariable int id) {
		return fDAO.getByID(id);
	}
	
	
	@PostMapping("/fall")
	public ResponseEntity<?> saveFalls(@RequestBody Falldata fall) {
		fDAO.save(fall);
		return ResponseEntity.ok("Fall registered successfully!");
	}
	
	@PutMapping("fall/{id}")
	public String updateFall(@RequestBody Falldata fall, @PathVariable int id) {
		return fDAO.update(fall, id) + " rows updated to DB";
	}
	
	@DeleteMapping("fall/{id}")
	public String deleteFall(@PathVariable int id) {
		return fDAO.delete(id) + " rows deleted from DB";
	}
	
	
}
