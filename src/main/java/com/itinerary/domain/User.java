package com.itinerary.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
 * 用户信息表
 *
 */
@Entity
@Table(name = "Users")
public class User extends DomainObject {

	private String email;
	
	private String username;
	
	private String password;
	
	private long registerDatetime;
	
	private long lastLoginDateTime;
	
	/**
	 * 用户位置
	 */
	private String location;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getRegisterDatetime() {
		return registerDatetime;
	}

	public void setRegisterDatetime(long registerDatetime) {
		this.registerDatetime = registerDatetime;
	}

	public long getLastLoginDateTime() {
		return lastLoginDateTime;
	}

	public void setLastLoginDateTime(long lastLoginDateTime) {
		this.lastLoginDateTime = lastLoginDateTime;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}
