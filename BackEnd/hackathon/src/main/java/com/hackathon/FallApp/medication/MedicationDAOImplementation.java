package com.hackathon.FallApp.medication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MedicationDAOImplementation implements MedicationDAO{
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public int save(Medication m) {
		return jdbcTemplate.update("INSERT INTO medication(name, patientid, prescriptiondate) VALUES (?,?,?)" ,new Object[] {
				m.getName(),
                m.getPatientid(), 
				m.getPrescriptionDate(),
            });
	}

	@Override
	public int update(Medication m, int id) {
		return jdbcTemplate.update("UPDATE medication SET name=?, patientid=?, prescriptiondate=? WHERE medicationid=?", new Object[] {
				m.getName(),
                m.getPatientid(), 
				m.getPrescriptionDate(),
            });
	}

	@Override
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM medication WHERE medicationid=?", id);
	}

	@Override
	public List<Medication> getAll() {
		return jdbcTemplate.query("SELECT * from medication", new BeanPropertyRowMapper<Medication>(Medication.class));
	}
	
	@Override
	public Medication getByID(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM medication WHERE medicationid=?", new BeanPropertyRowMapper<Medication>(Medication.class),id);
	}
}
