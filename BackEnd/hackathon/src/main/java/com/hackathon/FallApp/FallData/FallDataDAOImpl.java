package com.hackathon.FallApp.FallData;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.hackathon.FallApp.patient.Patient;

public class FallDataDAOImpl implements FallDataDAO{
	

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	
	@Override
	public int save(FallData data) {
		return jdbcTemplate.update("INSERT INTO FALLDATA(patientid, fropscore, fropdata) VALUES (?,?,?)" ,new Object[] {data.getPatientid(), 
				data.getFropscore(),
				data.getFropdate()});
	}

	@Override
	public int update(FallData data, int fallid) {
		return jdbcTemplate.update("UPDATE FALLDATA SET patientid=?, fropscore =?, fropdata =? WHERE fallid=?", new Object[] {data.getPatientid(), 
				data.getFropscore(),
				data.getFropdate()});
	}

	@Override
	public int delete(int fallid) {
		return jdbcTemplate.update("DELETE FROM FALLDATA WHERE fallid=?", fallid);
	}

	@Override
	public List<FallData> getAll() {
		return jdbcTemplate.query("SELECT * from FALLDATA", new BeanPropertyRowMapper<FallData>(FallData.class));	}

	@Override
	public FallData getByID(int fallid) {
		return jdbcTemplate.queryForObject("SELECT * FROM FALLDATA WHERE fallid =?", new BeanPropertyRowMapper<FallData>(FallData.class),fallid);
	}

}
