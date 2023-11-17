package com.bell.thingdong.domain.thinghistory.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FindThingHistoryDto {
	private Long changeThing;
	private String thingContent;
	private LocalDateTime thingDay;
}
