package com.bell.thingdong.domain.objects.entity;

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
@Table(name = "objects")
public class Objects {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "object_id", nullable = false)
	private Long objcetId;

	@Column(name = "object_path", nullable = false)
	private String objectPath;

	@Column(name = "object_thing")
	private Long objectThing;
}