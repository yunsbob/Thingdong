package com.bell.thingdong.domain.guestbook.dto.response;

import java.time.LocalDate;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GuestBookRes {
	@Schema(description = "방명록 id", example = "2")
	private Long guestBookId;

	@Schema(description = "방명록 내용", example = "나 왔다 감")
	private String content;

	@Schema(description = "방명록 날짜", example = "2023-10-31")
	private LocalDate writeDay;

	@Schema(description = "방명록 작성자 id", example = "ssafy")
	private String writerId;

	@Schema(description = "방명록 작성자 닉네임", example = "돌아버린 고구마")
	private String writerName;

	@Schema(description = "다음 방명록 id", example = "3 없으면 0")
	private Long nextGuestBookId;

	@Schema(description = "이전 방명록 id", example = "1 없으면 0")
	private Long prevGuestBookId;
}
