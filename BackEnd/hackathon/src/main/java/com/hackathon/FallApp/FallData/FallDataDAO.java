package com.hackathon.FallApp.FallData;

import java.util.List;

public interface FallDataDAO {
	
	int save(FallData data);
	int update(FallData data, int fallid);
	int delete(int fallid);
	List<FallData> getAll();
	FallData getByID(int fallid);
	
}
