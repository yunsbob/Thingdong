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
public class ColorReq {
	@Schema(description = "방 번호", example = "1")
	private Long roomId;

	@Schema(description = "방 색상", example = "black")
	private String roomColor;
}
