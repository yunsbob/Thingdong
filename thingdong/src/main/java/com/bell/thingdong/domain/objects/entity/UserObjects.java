package com.bell.thingdong.domain.objects.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "user_object")
public class UserObjects {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_objcet_id", nullable = false)
	private Long userObjectId;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "object_id")
	private Objects objects;

	@Column(name = "user_id", nullable = false)
	private Long userId;

	@Column(name = "room_id")
	private Long roomId;

	@Column(name = "user_object_status", nullable = false)
	private UserObjectsStatus userObjectsStatus;

	// 설계에 따라 방 내부 위치별 컬럼 추가 예정
}