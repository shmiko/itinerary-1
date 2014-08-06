package com.itinerary.service;

import com.itinerary.domain.User;

public interface IUserService {

	User login(String email, String password);
	void addUser(User user);
}
