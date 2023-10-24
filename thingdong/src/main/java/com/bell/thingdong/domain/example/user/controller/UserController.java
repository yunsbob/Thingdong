package com.bell.thingdong.domain.example.user.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.example.user.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/user")
@Tag(name = "user", description = "회원 API")
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	@Operation(summary = "로그아웃 API", description = "사용자를 로그아웃시키고 메인 페이지로 리다이렉트시킨다.")
	@PostMapping("/logout")
	public String logout(HttpServletRequest request, HttpServletResponse response, Principal principal) {
		userService.logout(request, response, principal.getName());
		return "redirect:https://masoori.site/";
	}
	//
	// @Operation(summary = "마이페이지 유저 정보 조회 API", description = "마이페이지에서 필요한 사용자 정보를 조회한다.")
	// @GetMapping("/info")
	// public ResponseEntity<InfoRes> userInfo(Principal principal) {
	// 	InfoRes infoRes = userService.getUserInfo(principal.getName());
	// 	return ResponseEntity.ok().body(infoRes);
	// }
}
