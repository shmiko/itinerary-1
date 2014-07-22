package com.itinerary.dao;

import org.springframework.data.repository.CrudRepository;

import com.itinerary.domain.Itinerary;

public interface IItineraryDao extends CrudRepository<Itinerary, Long> {

}
