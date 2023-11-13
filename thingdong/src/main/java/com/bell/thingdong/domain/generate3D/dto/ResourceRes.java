package com.bell.thingdong.domain.generate3D.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResourceRes {
	private String pngPath;
	private String gifPath;
	private String glbPath;
}
