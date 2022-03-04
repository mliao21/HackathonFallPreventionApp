package com.hackathon.FallApp.comment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CommentDAOImplementation implements CommentDAO{
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public int save(Comment c) {
		return jdbcTemplate.update("INSERT INTO comment(patientid, comment, date) VALUES (?,?,?)" ,new Object[] {
                c.getPatientid(), 
				c.getComment(),
				c.getDate(),
            });
	}

	@Override
	public int update(Comment c, int id) {
		return jdbcTemplate.update("UPDATE comment SET patientid=?, comment=?, date=? WHERE commentid=?", new Object[] {
                c.getPatientid(), 
				c.getComment(),
				c.getDate(),
            });
	}

	@Override
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM comment WHERE commentid=?", id);
	}

	@Override
	public List<Comment> getAll() {
		return jdbcTemplate.query("SELECT * from comment", new BeanPropertyRowMapper<Comment>(Comment.class));
	}
	
	@Override
	public Comment getByID(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM comment WHERE commentid=?", new BeanPropertyRowMapper<Comment>(Comment.class),id);
	}
}
