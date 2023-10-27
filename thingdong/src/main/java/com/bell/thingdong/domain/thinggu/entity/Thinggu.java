package com.bell.thingdong.domain.thinggu.entity;

import com.bell.thingdong.domain.thinggu.dto.ThingguId;
import com.bell.thingdong.domain.user.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "thinggu_id")
	private User thingguId;

	@Id
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User userId;

	@Column(name = "thinggu_status", nullable = false)
	private String thingguStatus;
}