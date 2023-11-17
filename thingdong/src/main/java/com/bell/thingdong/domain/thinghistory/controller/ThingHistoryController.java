package com.bell.thingdong.domain.thinghistory.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.thinghistory.dto.response.ThingHistoryRes;
import com.bell.thingdong.domain.thinghistory.service.ThingHistoryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/thing-history")
@RequiredArgsConstructor
@Tag(name = "thing-history", description = "띵 내역 컨트롤러")
public class ThingHistoryController {
	private final ThingHistoryService thingHistoryService;

	@Operation(summary = "띵 내역 조회", description = "자신의 띵 내역을 불러온다.")
	@GetMapping
	public ResponseEntity<List<ThingHistoryRes>> loadRoom(Principal principal) {
		String email = principal.getName();

		List<ThingHistoryRes> thingHistoryResList = thingHistoryService.getThingHistory(email);

		return ResponseEntity.ok(thingHistoryResList);
	}
}
