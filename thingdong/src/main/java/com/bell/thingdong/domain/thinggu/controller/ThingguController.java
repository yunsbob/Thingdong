package com.bell.thingdong.domain.thinggu.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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

		thingguService.addThinggu(email, thingguReq.getThingguId());

		return ResponseEntity.ok().build();
	}
}
