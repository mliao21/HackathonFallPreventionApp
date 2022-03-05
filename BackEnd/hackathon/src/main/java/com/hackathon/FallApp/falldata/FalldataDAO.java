package com.hackathon.FallApp.Falldata;

import java.util.List;

public interface FalldataDAO {
	
	int save(Falldata data);
	int update(Falldata data, int fallid);
	int delete(int fallid);
	List<Falldata> getAll();
	Falldata getByID(int fallid);
	List<Falldata> getHighest();
	
}
