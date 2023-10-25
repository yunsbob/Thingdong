package com.bell.thingdong.domain.thinggu.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "thinggus")
public class Thinggu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "thinggu_id", nullable = false)
	private Long thingguId;

	@Column(name = "user_id", nullable = false)
	private Long userId;

	@Column(name = "thinggu_status", nullable = false)
	private String thingguStatus;
}