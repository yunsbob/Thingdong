package com.bell.thingdong.domain.thinggu.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.thinggu.dto.request.ThingguReq;
import com.bell.thingdong.domain.thinggu.dto.response.ThingguRes;
import com.bell.thingdong.domain.thinggu.service.ThingguService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/thinggus")
@RequiredArgsConstructor
@Tag(name = "thinggu", description = "띵구 관련 컨트롤러")
public class ThingguController {
	private final ThingguService thingguService;

	@Operation(summary = "띵구 목록 조회", description = "토큰으로 나의 띵구 목록과 띵구 요청 목록을 불러온다.")
	@GetMapping
	public ResponseEntity<ThingguRes> loadThinggus(Principal principal) {
		String email = principal.getName();

		ThingguRes thingguRes = thingguService.getThinggus(email);

		return ResponseEntity.ok(thingguRes);
	}

	@Operation(summary = "띵구 요청", description = "띵구 검색을 통해 나온 유저에게 띵구 요청을 보낸다.")
	@PostMapping
	public ResponseEntity<?> requestThinggu(Principal principal, @RequestBody ThingguReq thingguReq) {
		String email = principal.getName();

		thingguService.requestThinggu(email, thingguReq.getThingguId());

		return ResponseEntity.ok().build();
	}

	@Operation(summary = "띵구 수락", description = "알람 목록에서 띵구 요청을 수락한다.")
	@PutMapping
	public ResponseEntity<?> acceptThinggu(Principal principal, @RequestParam("userId") String userId, @RequestParam("check") String check) {
		String email = principal.getName();

		if (check.equals("Y")) {
			thingguService.acceptThinggu(email, userId);
		} else {
			return ResponseEntity.badRequest().build();
		}

		return ResponseEntity.ok().build();
	}

	@Operation(summary = "띵구 삭제 또는 거절", description = "띵구 목록에서 띵구를 삭제 또는 거절 한다.")
	@DeleteMapping("/{userId}")
	public ResponseEntity<?> removeThinggu(Principal principal, @PathVariable("userId") String userId) {
		String email = principal.getName();

		thingguService.deleteThinggu(email, userId);

		return ResponseEntity.ok().build();
	}
}
