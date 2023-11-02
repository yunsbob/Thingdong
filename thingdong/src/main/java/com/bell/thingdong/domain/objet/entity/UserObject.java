package com.bell.thingdong.domain.objet.entity;

import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.room.entity.UserRoom;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "user_objects")
public class UserObject {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_objcet_id", nullable = false)
	private Long userObjectId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "object_id", nullable = false)
	private Objet objet;

	@Column(name = "user_id", nullable = false)
	private Long userId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room_id")
	private UserRoom roomId;

	@Enumerated(EnumType.STRING)
	@Column(name = "user_object_status", nullable = false)
	private UserObjectStatus userObjectStatus;

	// 설계에 따라 방 내부 위치별 컬럼 추가 예정

	public void setUserObjectStatus(UserObjectStatus userObjectStatus) {
		this.userObjectStatus = userObjectStatus;
	}
}