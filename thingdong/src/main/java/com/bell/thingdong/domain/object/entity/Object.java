package com.bell.thingdong.domain.object.entity;

import com.bell.thingdong.domain.object.dto.ObjectCategory;

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
public class Object {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "object_id", nullable = false)
	private Long objectId;

	@Column(name = "object_path", nullable = false)
	private String objectPath;

	@Column(name = "object_thing")
	private Long objectThing;

	@Column(name = "object_category", nullable = false)
	private ObjectCategory objectCategory;
}