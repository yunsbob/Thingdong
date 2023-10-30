package com.bell.thingdong.domain.thinggu.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ThingguReq {
	@Schema(description = "띵구 id", example = "hello")
	private String thingguId;
}
