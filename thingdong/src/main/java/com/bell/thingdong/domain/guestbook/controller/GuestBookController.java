package com.bell.thingdong.domain.guestbook.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.guestbook.dto.request.GuestBookReq;
import com.bell.thingdong.domain.guestbook.service.GuestBookService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/guest-books")
@RequiredArgsConstructor
@Tag(name = "guestbook", description = "방명록 관련 컨트롤러")
public class GuestBookController {
	private final GuestBookService guestBookService;

	@Operation(summary = "방명록 작성", description = "방명록을 작성한다.")
	@PostMapping
	public ResponseEntity<?> createGuestBook(Principal principal, @RequestBody GuestBookReq guestBookReq) {
		String email = principal.getName();

		guestBookService.createGuestBook(email, guestBookReq);

		return ResponseEntity.ok().build();
	}
}
