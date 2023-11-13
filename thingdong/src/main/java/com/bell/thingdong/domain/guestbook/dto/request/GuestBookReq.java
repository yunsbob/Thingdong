package com.bell.thingdong.domain.guestbook.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GuestBookReq {
	@Schema(description = "방명록 주인", example = "ssafy")
	private String userId;

	@Schema(description = "방명록 내용", example = "나 왔다 감")
	private String content;
}
