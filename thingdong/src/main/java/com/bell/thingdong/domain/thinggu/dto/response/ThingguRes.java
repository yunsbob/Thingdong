package com.bell.thingdong.domain.thinggu.dto.response;

import java.util.List;

import com.bell.thingdong.domain.thinggu.dto.ThingguDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ThingguRes {
	@Schema(description = "띵구 목록")
	List<ThingguDto> thingguList;

	@Schema(description = "띵구 알람 목록")
	List<ThingguDto> thingguAlarmList;
}
