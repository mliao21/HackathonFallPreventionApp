package com.hackathon.FallApp.patient;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PatientDAOImpl implements PatientDAO{
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	
	@Override
	public int save(Patient patient) {
		return jdbcTemplate.update("INSERT INTO PATIENT(name, bloodtype, sex, phn, diagnosis, weight) VALUES (?,?,?,?,?,?)" ,new Object[] {patient.getName(), 
				patient.getBloodtype(),
				patient.getSex(),
				patient.getPhn(),
				patient.getDiagnosis(),
				patient.getWeight()});
	}

	@Override
	public int update(Patient patient, int patientid) {
		return jdbcTemplate.update("UPDATE PATIENT SET name=?, bloodtype =?, sex =?, phn =?, diagnosis =?, weight =? WHERE patientid=?", new Object[] {patient.getName(), 
				patient.getBloodtype(),
				patient.getSex(),
				patient.getPhn(),
				patient.getDiagnosis(),
				patient.getWeight()});
	}

	@Override
	public int delete(int patientid) {
		return jdbcTemplate.update("DELETE FROM PATIENT WHERE patientid=?", patientid);
	}

	@Override
	public List<Patient> getAll() {
		return jdbcTemplate.query("SELECT * from PATIENT", new BeanPropertyRowMapper<Patient>(Patient.class));
	}


	@Override
	public Patient getByID(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM PATIENT WHERE patientid =?", new BeanPropertyRowMapper<Patient>(Patient.class),id);
	}

}