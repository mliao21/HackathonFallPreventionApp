package com.hackathon.FallApp.PatientData;

import java.util.List;

public interface PatientDataDAO {
	
	int save(PatientData patient);
	int update(PatientData patient, int patientid);
	int delete(int dataid);
	List<PatientData> getAll();
	PatientData getByID(int dataid);
	
}
