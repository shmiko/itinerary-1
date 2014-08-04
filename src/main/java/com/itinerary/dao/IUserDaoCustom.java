package com.itinerary.dao;

import com.itinerary.domain.User;

public interface IUserDaoCustom {
	
	User findByEmail(String email);
}
