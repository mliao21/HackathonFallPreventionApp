package com.hackathon.FallApp.Patientdata;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PatientdataDAOImpl implements PatientdataDAO{
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	
	@Override
	public int save(Patientdata patient) {
		return jdbcTemplate.update("INSERT INTO patientdata(patientid, date, time, pupil, temperature, bloodpressure,pulse,oxygensaturation,verbalresponse) VALUES (?,?,?,?,?,?,?,?,?)" ,new Object[] {patient.getPatientid(), 
				patient.getDate(),
				patient.getTime(),
				patient.getPupil(),
				patient.getTemperature(),
				patient.getBloodpressure(),
				patient.getPulse(),
				patient.getOxygensaturation(),
				patient.getVerbalresponse()});
	}

	@Override
	public int update(Patientdata patient, int patientid) {
		return jdbcTemplate.update("UPDATE patientdata SET patientid=?, date =?, time =?, pupil =?, temperature =?, bloodpressure =? , pulse =? oxygensaturation =?, verbalresponse =? WHERE dataid=?", new Object[] {patient.getPatientid(), 
				patient.getDate(),
				patient.getTime(),
				patient.getPupil(),
				patient.getTemperature(),
				patient.getBloodpressure(),
				patient.getPulse(),
				patient.getOxygensaturation(),
				patient.getVerbalresponse()});
	}

	@Override
	public int delete(int dataid) {
		return jdbcTemplate.update("DELETE FROM patientdata WHERE dataid=?", dataid);
	}

	@Override
	public List<Patientdata> getAll() {
		return jdbcTemplate.query("SELECT * from patientdata", new BeanPropertyRowMapper<Patientdata>(Patientdata.class));
	}

	@Override
	public Patientdata getByID(int dataid) {
		return jdbcTemplate.queryForObject("SELECT * FROM patientdata WHERE dataid =?", new BeanPropertyRowMapper<Patientdata>(Patientdata.class),dataid);
	}

}
