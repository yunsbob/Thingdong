package com.bell.thingdong.domain.object.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserObjectDto {
	private Long userObjectId;
	private String userObjectStatus;
	private String objectPath;
}