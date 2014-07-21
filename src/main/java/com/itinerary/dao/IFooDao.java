package com.itinerary.dao;

import org.springframework.data.repository.CrudRepository;

import com.itinerary.domain.Foo;

public interface IFooDao extends CrudRepository<Foo, Long> {

}
