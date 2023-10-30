package com.bell.thingdong.domain.user.dto.request;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginReq {

	@NotEmpty(message = "이메일은 필수 입력값입니다.")
	@Schema(description = "유저ID", example = "ssafy")
	@Pattern(regexp = "^[A-Za-z0-9._%+-]+$", message = "ID 형식에 맞지 않습니다.")
	@Size(min = 4, max = 16, message = "ID는 4자에서 16자 사이여야 합니다.")
	private String userId;

	@NotEmpty(message = "비밀번호는 필수 입력값입니다.")
	@Schema(description = "비밀번호", example = "1q2w3e4r!")
	private String password;

	public UsernamePasswordAuthenticationToken toAuthentication() {
		return new UsernamePasswordAuthenticationToken(userId, password);
	}
}
