package com.itinerary.domain;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * 
 *用户设置表
 *
 */
@Entity
@Table(name = "Preferences")
public class Preference extends DomainObject {

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
	
	/**
	 * 是否接收评论消息
	 */
	private boolean allowcomments;
	/**
	 * 是否接收评分消息
	 */
	private boolean isRateNotified;
	/**
	 * 是否接收关注消息
	 */
	private boolean isfollowNotified;
	/**
	 * 是否接收点赞消息
	 */
	private boolean isFavoriteNotified;
	/**
	 * 是否接收系统信件消息
	 */
	private boolean isNewsletterNotified;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public boolean isAllowcomments() {
		return allowcomments;
	}

	public void setAllowcomments(boolean allowcomments) {
		this.allowcomments = allowcomments;
	}

	public boolean isRateNotified() {
		return isRateNotified;
	}

	public void setRateNotified(boolean isRateNotified) {
		this.isRateNotified = isRateNotified;
	}

	public boolean isIsfollowNotified() {
		return isfollowNotified;
	}

	public void setIsfollowNotified(boolean isfollowNotified) {
		this.isfollowNotified = isfollowNotified;
	}

	public boolean isFavoriteNotified() {
		return isFavoriteNotified;
	}

	public void setFavoriteNotified(boolean isFavoriteNotified) {
		this.isFavoriteNotified = isFavoriteNotified;
	}

	public boolean isNewsletterNotified() {
		return isNewsletterNotified;
	}

	public void setNewsletterNotified(boolean isNewsletterNotified) {
		this.isNewsletterNotified = isNewsletterNotified;
	}

}
