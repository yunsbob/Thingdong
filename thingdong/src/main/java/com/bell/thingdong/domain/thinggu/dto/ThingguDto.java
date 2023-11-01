package com.bell.thingdong.domain.thinggu.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ThingguDto {
	@Schema(description = "해당 유저의 닉네임", example = "안녕")
	private String nickname;

	@Schema(description = "해당 유저의 아이디", example = "hello")
	private String userId;

	@Schema(description = "해당 유저와의 띵구 상태", example = "Y")
	private String thingguStatus;
}
