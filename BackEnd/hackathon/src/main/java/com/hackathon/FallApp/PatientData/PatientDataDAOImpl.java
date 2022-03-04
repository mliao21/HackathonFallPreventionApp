package com.hackathon.FallApp.PatientData;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PatientDataDAOImpl implements PatientDataDAO{
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	
	@Override
	public int save(PatientData patient) {
		return jdbcTemplate.update("INSERT INTO PATIENTDATA(patientid, date, time, pupil, temperature, bloodpressure,pulse,oxygensaturation,verbalresponse) VALUES (?,?,?,?,?,?,?,?,?)" ,new Object[] {patient.getPatientid(), 
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
	public int update(PatientData patient, int patientid) {
		return jdbcTemplate.update("UPDATE PATIENT SET patientid=?, date =?, time =?, pupil =?, temperature =?, bloodpressure =? , pulse =? oxygensaturation =?, verbalresponse =? WHERE dataid=?", new Object[] {patient.getPatientid(), 
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
		return jdbcTemplate.update("DELETE FROM PATIENT WHERE dataid=?", dataid);
	}

	@Override
	public List<PatientData> getAll() {
		return jdbcTemplate.query("SELECT * from PATIENTDATA", new BeanPropertyRowMapper<PatientData>(PatientData.class));
	}

	@Override
	public PatientData getByID(int dataid) {
		return jdbcTemplate.queryForObject("SELECT * FROM PATIENTDATA WHERE dataid =?", new BeanPropertyRowMapper<PatientData>(PatientData.class),dataid);
	}

}
