package com.bell.thingdong.domain.room.dto.response;

import java.util.List;

import com.bell.thingdong.domain.object.dto.UserObjectDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRoomRes {
	@Schema(description = "해당 방에 존재하는 가구 리스트들")
	private List<UserObjectDto> userObjectList;
	@Schema(description = "해당 방의 벽지 색상", example = "RRGGBB")
	private String roomColor;
	@Schema(description = "해당 방 번호", example = "2")
	private Long roomId;
	@Schema(description = "해당 방 주인의 id", example = "1")
	private Long userId;
	@Schema(description = "다음 방 번호", example = "3 만약 존재하지 않는다면 0")
	private Long nextRoom;
	@Schema(description = "이전 방 번호", example = "1 만약 존재하지 않는다면 0")
	private Long prevRoom;
}