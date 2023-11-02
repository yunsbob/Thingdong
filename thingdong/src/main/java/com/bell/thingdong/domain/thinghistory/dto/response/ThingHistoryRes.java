package com.bell.thingdong.domain.thinghistory.dto.response;

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
public class ThingHistoryRes {
	@Schema(description = "해당 방 번호", example = "2")
	private Long changeThing;

	@Schema(description = "띵 내용", example = "")
	private String thingContent;

	@Schema(description = "획득인지 감소인지 여부", example = "Y")
	private String isPlus;

	@Schema(description = "띵 획득 날짜", example = "2023-10-31")
	private LocalDate thingDay;
}
