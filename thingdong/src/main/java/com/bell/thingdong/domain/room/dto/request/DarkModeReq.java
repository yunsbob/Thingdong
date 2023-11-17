package com.bell.thingdong.domain.room.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DarkModeReq {
	@Schema(description = "방 번호", example = "1")
	private Long roomId;

	@Schema(description = "다크 모드 여부", example = "true")
	private Boolean darkMode;
}
