package com.bell.thingdong.domain.objet.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ObjectRoomInventoryDto {
	@Schema(description = "유저가 가진 오브젝트 id", example = "2")
	private Long userObjectId;

	@Schema(description = "오브젝트 이미지 파일 경로", example = "wqexqwax")
	private String objectImagePath;

	@Schema(description = "오브젝트 3d 모델 경로", example = "wqexqwax")
	private String objectModelPath;

	@Schema(description = "오브젝트 이름", example = "wqexqwax")
	private String name;

	@Schema(description = "벽에 설치하는지 여부", example = "false")
	private Boolean isWall;

	@Schema(description = "오브젝트 설치여부", example = "Y")
	private String objectStatus;
}
