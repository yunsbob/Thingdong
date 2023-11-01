package com.bell.thingdong.domain.object.dto;

import java.time.LocalDate;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UnBoxThingHistoryDto {
	@Schema(description = "오브젝트 이미지 파일 경로", example = "wqexqwax")
	private String objectImagePath;

	@Schema(description = "오브젝트 이름", example = "원숭이먹은 바나나")
	private String objectName;

	@Schema(description = "구매 날짜", example = "2023-10-31")
	private LocalDate purchaseDay;
}
