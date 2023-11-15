package com.bell.thingdong.domain.objet.controller;

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

import com.bell.thingdong.domain.objet.dto.request.PresentReq;
import com.bell.thingdong.domain.objet.dto.request.UserObjectPositionReq;
import com.bell.thingdong.domain.objet.dto.response.ObjectInventoryRes;
import com.bell.thingdong.domain.objet.dto.response.ObjectRoomInventoryRes;
import com.bell.thingdong.domain.objet.service.ObjetService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/objects")
@RequiredArgsConstructor
@Tag(name = "object", description = "오브제 관련 컨트롤러")
public class ObjetController {
	private final ObjetService objetService;

	@Operation(summary = "오브제 구매", description = "인벤토리에서 오브제를 구매한다.")
	@PutMapping
	public ResponseEntity<?> purchaseObject(Principal principal, @RequestParam("userObjectId") Long userObjectId) {
		String email = principal.getName();

		objetService.purchaseObject(userObjectId, email);

		return ResponseEntity.ok().build();
	}

	@Operation(summary = "unboxthing 오브제 삭제", description = "룸 인벤토리에서 오브제를 삭제한다.")
	@DeleteMapping("/{userObjectId}")
	public ResponseEntity<?> removeUnBoxThing(@PathVariable("userObjectId") Long userObjectId) {
		objetService.deleteObject(userObjectId);

		return ResponseEntity.ok().build();
	}

	@Operation(summary = "룸 인벤토리에서 오브제 조회", description = "룸 인벤토리에서 오브제를 조회한다.")
	@GetMapping("/roomInventory")
	public ResponseEntity<ObjectRoomInventoryRes> loadRoomInventory(Principal principal) {
		String email = principal.getName();

		ObjectRoomInventoryRes objectRoomInventoryRes = objetService.getRoomInventoryObject(email);

		return ResponseEntity.ok(objectRoomInventoryRes);
	}

	@Operation(summary = "인벤토리에서 오브제 조회", description = "룸 인벤토리에서 오브제를 조회한다.")
	@GetMapping("/inventory")
	public ResponseEntity<ObjectInventoryRes> loadInventory(Principal principal) {
		String email = principal.getName();

		ObjectInventoryRes objectInventoryRes = objetService.getInventoryObject(email);

		return ResponseEntity.ok(objectInventoryRes);
	}

	@Operation(summary = "오브제 배치", description = "오브제를 사용자가 원하는 위치에 배치한다.")
	@PostMapping("/position")
	public ResponseEntity<?> arrangeObject(@RequestBody UserObjectPositionReq userObjectPositionReq) {
		log.info("arrangeObject Controller Start");
		objetService.setUserObjectPosition(userObjectPositionReq);
		log.info("arrangeObject Controller Start");

		return ResponseEntity.ok().build();
	}

	@Operation(summary = "언박띵 선물", description = "오브제를 해당 사용자에게 선물한다.")
	@PostMapping("/present")
	public ResponseEntity<?> presentUnBoxThing(@RequestBody PresentReq presentReq) {
		objetService.presentUnBoxThing(presentReq);

		return ResponseEntity.ok().build();
	}
}
