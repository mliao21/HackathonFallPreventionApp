package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "meds")
public class Medication {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "frop_score")
	private String fropScore;

	@Column(name = "risk_factor")
	private String riskFactor;
	
	@Column(name = "medication")
	private String medication;
	
	public Medication() {
		
	}
	
	public Medication(String fropScore, String riskFactor, String medication) {
		super();
		this.fropScore = fropScore;
		this.riskFactor= riskFactor;
		this.medication = medication;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFropScore() {
		return fropScore;
	}
	public void setFropScore(String fropScore) {
		this.fropScore = fropScore;
	}
	public String getRiskFactor() {
		return riskFactor;
	}
	public void setRiskFactor(String riskFactor) {
		this.riskFactor = riskFactor;
	}
	public String getMedication() {
		return medication;
	}
	public void setMedication(String medication) {
		this.medication = medication;
	}
}
