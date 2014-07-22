package com.itinerary.dao;

import org.springframework.data.repository.CrudRepository;

import com.itinerary.domain.User;

public interface IUserDao extends CrudRepository<User, Long> {

}
