package com.itinerary.domain;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
/**
 * 
 *行程详情信息表
 *
 */
@Entity
@Table(name = "ItineraryDetails")
public class ItineraryDetail extends DomainObject {
	
	@ManyToOne
	@JoinColumn(name = "itineraryId")
	private Itinerary itinerary;
	
	/**
	 * 行程第几天
	 */
	private int itinerarydays;
	
	/**
	 * 景点(多个景点用 , 号分割)
	 */
	private String attractions;
	
	/**
	 * 住宿
	 */
	private String accommodation;
	
	/**
	 * 是否包含早餐
	 */
	private boolean isSupplyBreakfast;
	
	/**
	 * 是否包含中餐
	 */
	private boolean isSupplyLunch;
	
	/**
	 * 是否包含晚餐
	 */
	private boolean isSupplyDinner;
	
	/**
	 * 是否包含购物
	 */
	private boolean isAllowShopping;
	
	/**
	 * 景点图片1
	 */
	private String attractions_image1;
	
	private String attractions_image2;
	
	private String attractions_image3;

	public Itinerary getItinerary() {
		return itinerary;
	}

	public void setItinerary(Itinerary itinerary) {
		this.itinerary = itinerary;
	}

	public int getItinerarydays() {
		return itinerarydays;
	}

	public void setItinerarydays(int itinerarydays) {
		this.itinerarydays = itinerarydays;
	}

	public String getAttractions() {
		return attractions;
	}

	public void setAttractions(String attractions) {
		this.attractions = attractions;
	}

	public String getAccommodation() {
		return accommodation;
	}

	public void setAccommodation(String accommodation) {
		this.accommodation = accommodation;
	}

	public boolean isSupplyBreakfast() {
		return isSupplyBreakfast;
	}

	public void setSupplyBreakfast(boolean isSupplyBreakfast) {
		this.isSupplyBreakfast = isSupplyBreakfast;
	}

	public boolean isSupplyLunch() {
		return isSupplyLunch;
	}

	public void setSupplyLunch(boolean isSupplyLunch) {
		this.isSupplyLunch = isSupplyLunch;
	}

	public boolean isSupplyDinner() {
		return isSupplyDinner;
	}

	public void setSupplyDinner(boolean isSupplyDinner) {
		this.isSupplyDinner = isSupplyDinner;
	}

	public boolean isAllowShopping() {
		return isAllowShopping;
	}

	public void setAllowShopping(boolean isAllowShopping) {
		this.isAllowShopping = isAllowShopping;
	}

	public String getAttractions_image1() {
		return attractions_image1;
	}

	public void setAttractions_image1(String attractions_image1) {
		this.attractions_image1 = attractions_image1;
	}

	public String getAttractions_image2() {
		return attractions_image2;
	}

	public void setAttractions_image2(String attractions_image2) {
		this.attractions_image2 = attractions_image2;
	}

	public String getAttractions_image3() {
		return attractions_image3;
	}

	public void setAttractions_image3(String attractions_image3) {
		this.attractions_image3 = attractions_image3;
	}

}
