package com.bell.thingdong.domain.user.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignUpReq {
	@NotEmpty(message = "ID는 필수 입력값입니다.")
	@Pattern(regexp = "^[A-Za-z0-9._%+-]{4,16}$", message = "ID 형식에 맞지 않습니다.")
	@Schema(description = "userID", example = "ssafy")
	private String userId;

	@NotEmpty(message = "비밀번호는 필수 입력값입니다.")
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,16}$", message =
		"비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
	@Schema(description = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.", example = "1q2w3e4r!")
	private String password;

	@Schema(description = "사용자 닉네임을 입력주세요 입력하지 않으면 자동으로 만들어 줍니다.", example = "돌아온 옥수수")
	private String nickname;
}
