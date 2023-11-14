package com.bell.thingdong.domain.generate3D.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResourceRes {
	@Schema(description = "png 이미지 파일 경로", example = "https://masoori.site/resources/png/sdfnsaldn.png")
	private String pngPath;
	@Schema(description = "glb 이미지 파일 경로", example = "https://masoori.site/resources/glb/s40gn23ndf.glb")
	private String glbPath;
	@Schema(description = "gif 이미지 파일 경로", example = "https://masoori.site/resources/glb/s40gn23ndf.gif")
	private String gifPath;
	@Schema(description = "유저 오브젝트 id", example = "1")
	private Long userObjectId;
}
