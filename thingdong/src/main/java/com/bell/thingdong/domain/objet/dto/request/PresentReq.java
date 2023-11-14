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
public class PresentReq {
	@Schema(description = "유저 id", example = "hello")
	private String userId;

	@Schema(description = "유저 오브제 id", example = "2")
	private Long userObjectId;
}
