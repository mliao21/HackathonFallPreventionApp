package com.hackathon.FallApp.patient;

import java.util.List;

public interface PatientDAO {
	
	int save(Patient patient);
	int update(Patient animal, int patientid);
	int delete(int patientid);
	List<Patient> getAll();
	Patient getByID(int id);
	
}
