package com.itinerary.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.itinerary.domain.User;
import com.itinerary.service.IUserService;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private IUserService userService;
	
	@RequestMapping(value = "login", method = RequestMethod.POST)
	public String loin(String email, String password) {
		System.out.println("-----------email---------"+email+"----------password----------"+password);
		User user=userService.login(email, password);
		if(user!=null){
			System.out.println("登陆成功！！！");
		}else{
			System.out.println("登陆fail fail！！");
		}
		return "index";
	}
	
	
	@RequestMapping(value = "signup", method = RequestMethod.POST)
	public String register(String email, String password,String username) {
		System.out.println("-----------email---------"+email+"----------password----------"+password);
		User u=userService.login(email, password);
		if(u!=null){
			System.out.println("用户存在");
		}else{
			User user=new User();
			user.setEmail(email);
			user.setPassword(password);
			user.setUsername(username);
			user.setRegisterDatetime(new Date().getTime());
			user.setLastLoginDateTime(new Date().getTime());
			userService.addUser(user);
			System.out.println("注册成功");
		}
		return "index";
	}
}
