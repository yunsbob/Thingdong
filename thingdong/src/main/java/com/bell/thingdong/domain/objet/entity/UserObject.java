package com.bell.thingdong.domain.objet.entity;

import com.bell.thingdong.domain.objet.dto.ArrangeObjectPositionDto;
import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.bell.thingdong.domain.user.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
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
@Table(name = "user_objects", indexes = {@Index(name = "idx_userobject_user_id", columnList = "user_id")})
public class UserObject {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_objcet_id", nullable = false)
	private Long userObjectId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "object_id", nullable = false)
	private Objet objet;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room_id")
	private UserRoom room;

	@Enumerated(EnumType.STRING)
	@Column(name = "user_object_status", nullable = false)
	private UserObjectStatus userObjectStatus;

	@Column(name = "x")
	private Double x;

	@Column(name = "y")
	private Double y;

	@Column(name = "z")
	private Double z;

	@Column(name = "rotation_x")
	private Double rotationX;

	@Column(name = "rotation_y")
	private Double rotationY;

	@Column(name = "rotation_z")
	private Double rotationZ;

	public void setUserObjectStatus(UserObjectStatus userObjectStatus) {
		this.userObjectStatus = userObjectStatus;
	}

	public void setUserObjectPosition(ArrangeObjectPositionDto arrangeObjectPositionDto, UserRoom room) {
		this.room = room;
		this.x = arrangeObjectPositionDto.getPosition().getX();
		this.y = arrangeObjectPositionDto.getPosition().getY();
		this.z = arrangeObjectPositionDto.getPosition().getZ();
		this.rotationY = arrangeObjectPositionDto.getRotation().getY();
	}
}