package com.itinerary.dao;

import org.springframework.data.repository.CrudRepository;

import com.itinerary.domain.UserFollower;

public interface IUserFollowerDao extends CrudRepository<UserFollower, Long> {

}
