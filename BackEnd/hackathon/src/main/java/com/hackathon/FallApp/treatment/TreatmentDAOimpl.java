package com.hackathon.FallApp.treatment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TreatmentDAOimpl implements TreatmentDAO{
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public int save(Treatment treatment) {
		return jdbcTemplate.update("INSERT INTO treatment (patientid, medicationid, treatmentid) VALUES (?,?,?)" ,new Object[] {
                treatment.getPatientid(), 
                treatment.getMedicationid(), 
				treatment.getRecomendationid(),
            });
	}

	@Override
	public int update(Treatment treatment, int id) {
		return jdbcTemplate.update("UPDATE treatment SET patientid=?, medicationid=?, recomendationid=? WHERE treatmentid=?", new Object[] {
                treatment.getPatientid(), 
                treatment.getMedicationid(), 
				treatment.getRecomendationid(),
            });
	}

	@Override
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM treatment WHERE treatmentid=?", id);
	}

	@Override
	public List<Treatment> getAll() {
		
		return jdbcTemplate.query("SELECT * from treatment", new BeanPropertyRowMapper<Treatment>(Treatment.class));
	}

	@Override
	public Treatment getByID(int id) {
	
		return jdbcTemplate.queryForObject("SELECT * FROM treatment WHERE treatmentid=?", new BeanPropertyRowMapper<Treatment>(Treatment.class),id);
	}
}
