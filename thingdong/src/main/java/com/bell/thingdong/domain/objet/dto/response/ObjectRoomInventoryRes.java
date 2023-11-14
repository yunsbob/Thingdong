package com.bell.thingdong.domain.objet.dto.response;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.ObjectRoomInventoryDto;
import com.bell.thingdong.domain.objet.dto.SmartThingsRoomInventoryDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ObjectRoomInventoryRes {
	@Schema(description = "가구 목록")
	List<ObjectRoomInventoryDto> furnitureList;

	@Schema(description = "가전 목록")
	List<ObjectRoomInventoryDto> homeApplianceList;

	@Schema(description = "소품 목록")
	List<ObjectRoomInventoryDto> propList;

	@Schema(description = "바닥 목록")
	List<ObjectRoomInventoryDto> floorList;

	@Schema(description = "띵즈 목록")
	List<SmartThingsRoomInventoryDto> smartThingsList;

	@Schema(description = "언박띵 목록")
	List<ObjectRoomInventoryDto> unBoxThingList;
}
