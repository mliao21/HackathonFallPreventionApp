package com.hackathon.FallApp.recomendation;

import java.util.List;

public interface RecomendationDAO {
	
	int save(Recomendation r);
	int update(Recomendation r, int id);
	int delete(int id);
	List<Recomendation> getAll();
	Recomendation getByID(int id);
}
