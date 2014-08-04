package com.itinerary.dao.impl;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;

import com.itinerary.dao.IUserDaoCustom;
import com.itinerary.domain.User;

public class UserDaoCustom implements IUserDaoCustom {

	@Autowired
	private EntityManager entityManager;

	@Override
	public User findByEmail(String email) {

		User user = entityManager
				.createQuery("SELECT * FROM User WHERE email = :email",
						User.class).setParameter("email", email)
				.getSingleResult();

		return user;
	}

}
