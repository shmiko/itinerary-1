package com.itinerary.service.impl;

import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.itinerary.dao.IFooDao;
import com.itinerary.domain.Foo;
import com.itinerary.service.IFooService;

@Service
public class FooService implements IFooService {

	@Inject
	private IFooDao fooDao;

	@Transactional
	@Override
	public void save(Foo foo) {

		fooDao.save(foo);
		
	}

}
