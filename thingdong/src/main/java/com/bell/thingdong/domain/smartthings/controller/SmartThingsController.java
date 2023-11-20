package com.bell.thingdong.domain.smartthings.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.smartthings.dto.req.AddSmartThingsReq;
import com.bell.thingdong.domain.smartthings.dto.req.SmartThingsStatusReq;
import com.bell.thingdong.domain.smartthings.service.SmartThingsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/smart-things")
@RequiredArgsConstructor
@Tag(name = "smartThings", description = "스마트 띵스 관련 컨트롤러")
public class SmartThingsController {
	private final SmartThingsService smartThingsService;

	@Operation(summary = "상태 변경", description = "스마트 띵스 상태를 변경한다.")
	@PutMapping("/status")
	public ResponseEntity<?> changeStatus(@RequestBody SmartThingsStatusReq smartThingsStatusReq) {
		smartThingsService.updateStatus(smartThingsStatusReq);

		return ResponseEntity.ok().build();
	}

	@Operation(summary = "스마트 띵스 기기 등록", description = "스마트 띵스 기기를 등록한다.")
	@PostMapping
	public ResponseEntity<?> addSmartThings(@RequestBody List<AddSmartThingsReq> smartThingsReqList, Principal principal) {
		String email = principal.getName();

		smartThingsService.addSmartThings(email, smartThingsReqList);

		return ResponseEntity.ok().build();
	}
}
