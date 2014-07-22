package com.itinerary.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
/**
 * 
 *行程表
 *
 */
@Entity
@Table(name = "Itineraries")
public class Itinerary extends DomainObject {

	@ManyToOne
	@JoinColumn(name = "userId")
	private User creator;
	/**
	 * 主题
	 */
	private String subject;
	/**
	 * 出发地
	 */
	private String depature;
	/**
	 * 目的地
	 */
	private String destination;
	/**
	 * 浏览数
	 */
	private int views;
	/**
	 * 收藏数
	 */
	private int favorites;
	private String price;
	private long createDatetime;
	/**
	 * 行程主题
	 */
	private String theme;
	private String note;
	/**
	 * 是否公开
	 */
	private boolean isPrivacy;
	
	@OneToMany(mappedBy = "itinerary")
	private List<ItineraryDetail> itineraryDetails = new ArrayList<ItineraryDetail>();

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getDepature() {
		return depature;
	}

	public void setDepature(String depature) {
		this.depature = depature;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getViews() {
		return views;
	}

	public void setViews(int views) {
		this.views = views;
	}

	public int getFavorites() {
		return favorites;
	}

	public void setFavorites(int favorites) {
		this.favorites = favorites;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public long getCreateDatetime() {
		return createDatetime;
	}

	public void setCreateDatetime(long createDatetime) {
		this.createDatetime = createDatetime;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public boolean isPrivacy() {
		return isPrivacy;
	}

	public void setPrivacy(boolean isPrivacy) {
		this.isPrivacy = isPrivacy;
	}

	public List<ItineraryDetail> getItineraryDetails() {
		return itineraryDetails;
	}

	public void setItineraryDetails(List<ItineraryDetail> itineraryDetails) {
		this.itineraryDetails = itineraryDetails;
	}
}
