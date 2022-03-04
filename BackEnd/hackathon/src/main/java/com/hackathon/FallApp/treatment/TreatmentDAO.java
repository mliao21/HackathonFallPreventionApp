package com.hackathon.FallApp.treatment;

import java.util.List;

public interface TreatmentDAO {
	
	int save(Treatment treatment);
	int update(Treatment treatment, int id);
	int delete(int id);
	List<Treatment> getAll();
	Treatment getByID(int id);
}
