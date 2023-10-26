package com.bell.thingdong.domain.room.dto;

import java.util.ArrayList;
import java.util.List;

import com.bell.thingdong.domain.object.dto.UserObjectDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserRoomRes {
	private List<UserObjectDto> userObjectList;
	private String roomColor;
	private Long roomId;
	private Long userId;
	private Long nextRoom;
	private Long prevRoom;

	public UserRoomRes() {
		this.userObjectList = new ArrayList<>();
	}
}