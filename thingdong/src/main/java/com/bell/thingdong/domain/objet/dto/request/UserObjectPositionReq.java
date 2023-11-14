package com.bell.thingdong.domain.objet.dto.request;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.ArrangeObjectPositionDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserObjectPositionReq {
	@Schema(description = "방 번호", example = "1")
	private Long roomId;

	@Schema(description = "유저 오브제 배치에 대한 값")
	private List<ArrangeObjectPositionDto> objectPositionList;
}
