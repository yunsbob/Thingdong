package com.bell.thingdong.domain.guestbook.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.guestbook.dto.request.GuestBookReq;
import com.bell.thingdong.domain.guestbook.dto.response.GuestBookRes;
import com.bell.thingdong.domain.guestbook.service.GuestBookService;

import io.swagger.v3.oas.annotations.Operation;
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

	@Operation(summary = "방명록 삭제", description = "방명록을 삭제한다.")
	@DeleteMapping("/{guestBookId}")
	public ResponseEntity<?> removeGuestBook(Principal principal, @PathVariable("guestBookId") Long guestBookId) {
		String email = principal.getName();

		guestBookService.deleteGuestBook(email, guestBookId);

		return ResponseEntity.ok().build();
	}

	@Operation(summary = "방명록 조회", description = "userID로 해당 유저의 방명록을 조회한다.")
	@GetMapping
	public ResponseEntity<List<GuestBookRes>> loadGuestBook(@RequestParam("userId") String userId) {
		List<GuestBookRes> guestBookRes = guestBookService.getGuestBookList(userId);

		return ResponseEntity.ok(guestBookRes);
	}
}
