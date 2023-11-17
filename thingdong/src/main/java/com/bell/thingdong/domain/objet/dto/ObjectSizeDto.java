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
public class ObjectSizeDto {
	@Schema(description = "오브젝트 높이 값", example = "2")
	private Double height;

	@Schema(description = "오브젝트 넓이 값", example = "3")
	private Double width;
}
