package com.itinerary.controller;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.itinerary.domain.Foo;
import com.itinerary.service.IFooService;

@Controller
@RequestMapping("/foo")
public class FooController {

	@Inject
	private IFooService fooService;

	@RequestMapping(value = "/create", method = RequestMethod.GET)
	@ResponseBody
	public String saveFoo(@RequestParam String name) {

		Foo foo = new Foo(name);

		fooService.save(foo);

		return "Save foo";
	}
}
