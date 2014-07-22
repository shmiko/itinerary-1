package com.itinerary.dao;

import org.springframework.data.repository.CrudRepository;

import com.itinerary.domain.Commentary;

public interface ICommentaryDao extends CrudRepository<Commentary, Long> {

}
