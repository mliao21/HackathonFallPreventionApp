package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "recs")
public class Recommendation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "frop_score")
	private String fropScore;

	@Column(name = "risk_factor")
	private String riskFactor;
	
	@Column(name = "recommendation")
	private String recommendation;
	
	public Recommendation() {
		
	}
	
	public Recommendation(String fropScore, String riskFactor, String recommendation) {
		super();
		this.fropScore = fropScore;
		this.riskFactor= riskFactor;
		this.recommendation = recommendation;
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
	public String getRecommendation() {
		return recommendation;
	}
	public void setRecommendation(String recommendation) {
		this.recommendation = recommendation;
	}
}
