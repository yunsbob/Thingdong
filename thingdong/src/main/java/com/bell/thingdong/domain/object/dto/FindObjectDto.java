package com.bell.thingdong.domain.object.dto;

import com.bell.thingdong.domain.object.entity.Object;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FindObjectDto {
	private Long userObjectId;
	private UserObjectStatus objectStatus;
	private Object object;
}
