package com.itinerary.dao;

import org.springframework.data.repository.CrudRepository;

import com.itinerary.domain.Preference;

public interface IPreferenceDao extends CrudRepository<Preference, Long> {

}
