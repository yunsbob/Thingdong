package com.bell.thingdong.domain.smartthings.dto.req;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SmartThingsStatusReq {
	@Schema(description = "디바이스 id", example = "1232312")
	private String deviceId;

	@Schema(description = "스마트 띵스 상태", example = "true")
	private Boolean status;
}
