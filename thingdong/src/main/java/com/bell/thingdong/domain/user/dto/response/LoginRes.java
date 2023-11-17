package com.bell.thingdong.domain.user.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginRes {
	@Schema(description = "사용자 accessToken", example = "echnvjfjhlsdambklweabntb1012fasdglkjghkj23hj8")
	private String accessToken;

	@Schema(description = "사용자 PAT", example = "dfnasjfdnib23ierhg82")
	private String PAToken;

	@Schema(description = "사용자 ID", example = "ssafyTest")
	private String userId;

	@Schema(description = "사용자 NickName", example = "돌아온 옥수수")
	private String nickName;

	@Schema(description = "사용자 보유 Thing", example = "100")
	private Long thingAmount;
}
