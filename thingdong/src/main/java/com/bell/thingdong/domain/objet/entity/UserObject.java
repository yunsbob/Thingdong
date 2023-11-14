package com.bell.thingdong.domain.objet.entity;

import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.bell.thingdong.domain.smartthings.entity.SmartThings;
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

	@Builder.Default
	@Column(name = "x")
	private Double x = 0.0;

	@Builder.Default
	@Column(name = "y")
	private Double y = 0.0;

	@Builder.Default
	@Column(name = "z")
	private Double z = 0.0;

	@Builder.Default
	@Column(name = "rotation_x")
	private Double rotationX = 0.0;

	@Builder.Default
	@Column(name = "rotation_y")
	private Double rotationY = 0.0;

	@Builder.Default
	@Column(name = "rotation_z")
	private Double rotationZ = 0.0;

	@OneToOne(mappedBy = "userObject")
	private SmartThings smartThings;

	public void setUserObjectStatus(UserObjectStatus userObjectStatus) {
		this.userObjectStatus = userObjectStatus;
	}

	public void setUserObjectPosition(Double x, Double y, Double z, Double rotationY, UserRoom room, UserObjectStatus userObjectStatus) {
		this.userObjectStatus = userObjectStatus;
		this.room = room;
		this.x = x;
		this.y = y;
		this.z = z;
		this.rotationY = rotationY;
	}

	public void setUser(User user) {
		this.user = user;
	}
}