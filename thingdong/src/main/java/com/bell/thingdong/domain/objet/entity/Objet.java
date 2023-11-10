package com.bell.thingdong.domain.objet.entity;

import com.bell.thingdong.domain.objet.dto.ObjectCategory;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class Objet {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "object_id", nullable = false)
	private Long objectId;

	@Column(name = "object_image_path", nullable = false)
	private String objectImagePath;

	@Column(name = "object_model_path", nullable = false)
	private String objectModelPath;

	@Column(name = "object_thing")
	private Long objectThing;

	@Column(name = "object_width")
	private Double objectWidth;

	@Column(name = "object_height")
	private Double objectHeight;

	@Enumerated(EnumType.STRING)
	@Column(name = "object_category", nullable = false)
	private ObjectCategory objectCategory;
}