package com.bell.thingdong.domain.room.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.room.dto.UserRoomRes;
import com.bell.thingdong.domain.room.service.UserRoomService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor
@Tag(name = "room", description = "방 관련 컨트롤러")
public class UserRoomController {
	private final UserRoomService userRoomService;

	@Operation(summary = "방 추가", description = "자신에게 새로운 방을 추가한다.")
	@PostMapping
	public ResponseEntity<?> createRoom(Principal principal) {
		String email = principal.getName();

		userRoomService.createRoom(email);

		return ResponseEntity.ok().build();
	}

	@Operation(summary = "방 불러오기", description = "아직 미구현")
	@GetMapping
	public ResponseEntity<?> loadMyRoom(Principal principal) {
		String email = principal.getName();

		UserRoomRes userRoomRes = userRoomService.loadRoom(email);

		return ResponseEntity.ok(userRoomRes);
	}
}
