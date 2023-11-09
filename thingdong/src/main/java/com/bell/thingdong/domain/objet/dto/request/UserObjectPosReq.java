package com.bell.thingdong.domain.objet.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserObjectPosReq {
	@Schema(description = "방 번호", example = "1")
	private Long roomId;

	@Schema(description = "오브제 번호", example = "1")
	private Long userObjectId;

	@Schema(description = "오브젝트 x 좌표 값", example = "1")
	private Double x;

	@Schema(description = "오브젝트 y 좌표 값", example = "2")
	private Double y;

	@Schema(description = "오브젝트 z 좌표 값", example = "3")
	private Double z;

	@Schema(description = "오브젝트 회전 값", example = "2")
	private Double rotation;
}
