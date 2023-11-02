package com.bell.thingdong.domain.objet.dto.response;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.ObjectInventoryDto;
import com.bell.thingdong.domain.objet.dto.UnBoxThingHistoryDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ObjectInventoryRes {
	@Schema(description = "가구 목록")
	List<ObjectInventoryDto> furnitureList;

	@Schema(description = "가전 목록")
	List<ObjectInventoryDto> homeApplianceList;

	@Schema(description = "소품 목록")
	List<ObjectInventoryDto> propList;

	@Schema(description = "바닥 목록")
	List<ObjectInventoryDto> floorList;

	@Schema(description = "띵즈 목록")
	List<ObjectInventoryDto> smartThingsList;

	@Schema(description = "언박띵 내역")
	List<UnBoxThingHistoryDto> unBoxThingList;

}
