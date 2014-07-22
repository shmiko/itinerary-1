package com.itinerary.dao;

import org.springframework.data.repository.CrudRepository;

import com.itinerary.domain.Theme;

public interface IThemeDao extends CrudRepository<Theme, Long> {

}
