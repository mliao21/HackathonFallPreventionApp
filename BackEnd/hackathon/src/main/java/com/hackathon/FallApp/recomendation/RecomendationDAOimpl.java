package com.hackathon.FallApp.recomendation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RecomendationDAOimpl implements RecomendationDAO{
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public int save(Recomendation r) {
		return jdbcTemplate.update("INSERT INTO recomendation(type, details, date) VALUES (?,?,?)" ,new Object[] {
                r.getType(), 
				r.getDetails(),
				r.getDate(),
            });
	}

	@Override
	public int update(Recomendation r, int id) {
		return jdbcTemplate.update("UPDATE recomendation SET details=?, type=?, date=? WHERE recomendationid=?", new Object[] {
                r.getType(), 
				r.getDetails(),
				r.getDate(),
            });
	}

	@Override
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM recomendation WHERE recomendationid=?", id);
	}

	@Override
	public List<Recomendation> getAll() {
		return jdbcTemplate.query("SELECT * from recomendation", new BeanPropertyRowMapper<Recomendation>(Recomendation.class));
	}
	
	@Override
	public Recomendation getByID(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM recomendation WHERE recomendationid =?", new BeanPropertyRowMapper<Recomendation>(Recomendation.class),id);
	}
}
