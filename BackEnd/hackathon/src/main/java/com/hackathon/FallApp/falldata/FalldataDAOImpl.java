package com.hackathon.FallApp.falldata;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class FalldataDAOImpl implements FalldataDAO{
	

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	
	@Override
	public int save(Falldata data) {
		return jdbcTemplate.update("INSERT INTO falldata(patientid, fropscore, fropdata) VALUES (?,?,?)" ,new Object[] {
                data.getPatientid(), 
				data.getFropscore(),
				data.getFropdate()});
	}

	@Override
	public int update(Falldata data, int fallid) {
		return jdbcTemplate.update("UPDATE falldata SET patientid=?, fropscore =?, fropdata =? WHERE fallid=?", new Object[] {
                data.getPatientid(), 
				data.getFropscore(),
				data.getFropdate()});
	}

	@Override
	public int delete(int fallid) {
		return jdbcTemplate.update("DELETE FROM falldata WHERE fallid=?", fallid);
	}

	@Override
	public List<Falldata> getAll() {
		return jdbcTemplate.query("SELECT * from falldata", new BeanPropertyRowMapper<Falldata>(Falldata.class));	}

	@Override
	public Falldata getByID(int fallid) {
		return jdbcTemplate.queryForObject("SELECT * FROM falldata WHERE fallid =?", new BeanPropertyRowMapper<Falldata>(Falldata.class),fallid);
	}

}
