package com.itinerary.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
	
	/**
	 * Thymeleaf template resolver will look for a template named "home.html"
	 * which is located in /WEB-INF/html/ folder, as indicated in the configuration 
	 * 
	 * @return view id
	 */
	@RequestMapping
	public String index() {
		return "index";
	}
}
