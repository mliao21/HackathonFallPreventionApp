package com.hackathon.FallApp.Patientdata;

import java.util.List;

public interface PatientdataDAO {
	
	int save(Patientdata patient);
	int update(Patientdata patient, int patientid);
	int delete(int dataid);
	List<Patientdata> getAll();
	Patientdata getByID(int dataid);
	
}
