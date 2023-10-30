package com.bell.thingdong.domain.thinggu.entity;

import com.bell.thingdong.domain.thinggu.dto.ThingguId;
import com.bell.thingdong.domain.user.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@IdClass(ThingguId.class)
@Table(name = "thinggus")
public class Thinggu {
	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "thinggu_id")
	private User thingguId;

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User userId;

	@Column(name = "thinggu_status", nullable = false)
	private String thingguStatus;

	public void setThingguStatus(String thingguStatus) {
		this.thingguStatus = thingguStatus;
	}
}