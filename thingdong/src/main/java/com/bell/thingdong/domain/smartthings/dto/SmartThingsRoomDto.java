package com.bell.thingdong.domain.smartthings.dto;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.ObjectSizeDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SmartThingsRoomDto {
	@Schema(description = "유저가 가진 오브젝트 id", example = "2")
	private Long userObjectId;

	@Schema(description = "오브젝트 모델 파일 경로", example = "wqexqwax")
	private String objectModelPath;

	@Schema(description = "오브젝트 이름", example = "tomato")
	private String name;

	@Schema(description = "벽에 있는 오브젝트인지 표시", example = "false")
	private Boolean isWall;

	@Schema(description = "오브젝트 포지션")
	private List<Double> position;

	@Schema(description = "오브젝트 회전")
	private List<Double> rotation;

	@Schema(description = "오브젝트 크기")
	private ObjectSizeDto size;

	@Schema(description = "스마트 띵스 상태", example = "true")
	private Boolean status;

	@Schema(description = "디바이스 id", example = "dasdasasddas")
	private String deviceId;
}