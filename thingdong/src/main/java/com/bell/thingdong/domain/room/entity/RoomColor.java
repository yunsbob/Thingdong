package com.bell.thingdong.domain.room.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "room_color")
public class RoomColor {
	@Id
	@Column(name = "room_color", nullable = false)
	private String roomColor;

	@Column(name = "room_model_path", nullable = false)
	private String roomModelPath;
}