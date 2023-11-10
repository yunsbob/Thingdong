package com.bell.thingdong.domain.objet.dto.request;

import com.bell.thingdong.domain.objet.dto.ObjectPositionDto;
import com.bell.thingdong.domain.objet.dto.ObjectRotationDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserObjectPositionReq {
	@Schema(description = "방 번호", example = "1")
	private Long roomId;

	@Schema(description = "오브제 번호", example = "1")
	private Long userObjectId;

	@Schema(description = "오브젝트 좌표 값")
	private ObjectPositionDto position;

	@Schema(description = "오브젝트 회전 값")
	private ObjectRotationDto rotation;
}
