package com.itinerary.domain;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * 
 *消息表
 *
 */
@Entity
@Table(name = "Messages")
public class Message extends DomainObject {

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
	
	private String username;
	
	private String content;
	
	private boolean isVerified;
	/**
	 * 发送时间
	 */
	private long messagingDatetime;
	private MessageType messageType;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public boolean isVerified() {
		return isVerified;
	}

	public void setVerified(boolean isVerified) {
		this.isVerified = isVerified;
	}

	public long getMessagingDatetime() {
		return messagingDatetime;
	}

	public void setMessagingDatetime(long messagingDatetime) {
		this.messagingDatetime = messagingDatetime;
	}

	public MessageType getMessageType() {
		return messageType;
	}

	public void setMessageType(MessageType messageType) {
		this.messageType = messageType;
	}

}
