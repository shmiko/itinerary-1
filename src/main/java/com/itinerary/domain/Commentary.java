package com.itinerary.domain;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * 
 *评论表
 *
 */
@Entity
@Table(name = "Commentaris")
public class Commentary extends DomainObject {

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "itineraryId")
	private Itinerary itinerary;
	
	private String comment;
	
	private long commentDatetime;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public long getCommentDatetime() {
		return commentDatetime;
	}

	public void setCommentDatetime(long commentDatetime) {
		this.commentDatetime = commentDatetime;
	}
}
