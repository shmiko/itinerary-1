package com.itinerary.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itinerary.dao.IUserDao;
import com.itinerary.domain.User;
import com.itinerary.service.IUserService;

@Service
public class UserService implements IUserService {
	
	@Autowired
	private IUserDao userDao;

	@Override
	public void login(String email, String password) {
		
		User user = userDao.findByEmail(email);
	}

}
