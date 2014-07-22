package com.itinerary.domain;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * 
 *关注表
 *
 */
@Entity
@Table(name = "UserFollowers")
public class UserFollower extends DomainObject {

	/**
	 * 被关注用户
	 */
	@ManyToOne
	@JoinColumn(name = "followeeId")
	private User followee;
	
	/**
	 * 关注用户
	 */
	@ManyToOne
	@JoinColumn(name = "followerId")
	private User follower;
	
	private long followDatetime;

	public User getFollowee() {
		return followee;
	}

	public void setFollowee(User followee) {
		this.followee = followee;
	}

	public User getFollower() {
		return follower;
	}

	public void setFollower(User follower) {
		this.follower = follower;
	}

	public long getFollowDatetime() {
		return followDatetime;
	}

	public void setFollowDatetime(long followDatetime) {
		this.followDatetime = followDatetime;
	}
}
