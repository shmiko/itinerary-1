package com.itinerary.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Themes")
public class Theme extends DomainObject {

	private String theme;

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

}
