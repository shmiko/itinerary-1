package com.itinerary.dao;

import org.springframework.data.repository.CrudRepository;

import com.itinerary.domain.Message;

public interface IMessageDao extends CrudRepository<Message, Long> {

}
