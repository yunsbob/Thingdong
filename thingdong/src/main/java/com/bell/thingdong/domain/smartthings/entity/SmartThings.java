package com.bell.thingdong.domain.smartthings.entity;

import com.bell.thingdong.domain.objet.entity.UserObject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "smart_things")
public class SmartThings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "smart_things_id")
	private Long smartThingsId;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_object_id", nullable = false)
	private UserObject userObject;

	@Column(name = "device_id", nullable = false)
	private String deviceId;

	@Column(name = "status", nullable = false)
	private String status;

	@Column(name = "activation_path", nullable = false)
	private String activationPath;

	@Column(name = "name", nullable = false)
	private String name;

	public void setStatus(String status) {
		this.status = status;
	}
}
