package com.hackathon.FallApp.medication;

import java.util.List;

public interface MedicationDAO{
	
	int save(Medication m);
	int update(Medication m, int id);
	int delete(int id);
	List<Medication> getAll();
	Medication getByID(int id);
}
