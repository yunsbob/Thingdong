package com.bell.thingdong.domain.user.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.user.dto.request.LoginReq;
import com.bell.thingdong.domain.user.dto.request.SignUpReq;
import com.bell.thingdong.domain.user.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/users")
@Tag(name = "users", description = "회원 API")
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	@PostMapping("/logout")
	@Operation(summary = "로그인 API", description = "사용자를 로그인 시킵니다.")
	public String logout(HttpServletRequest request, HttpServletResponse response, Principal principal) {
		userService.logout(request, response, principal.getName());
		return "redirect:https://thingdong.site/";
	}

	@PostMapping("/signUp")
	@Operation(summary = "회원가입 API", description = "사용자를 회원가입 시킵니다.")
	public ResponseEntity<?> signUp(@RequestBody SignUpReq signUpReq) {
		//회원가입 서비스호출
		return ResponseEntity.ok().build();
	}

	@PostMapping("/login")
	@Operation(summary = "로그인 API", description = "사용자를 로그아웃시키고 메인 페이지로 리다이렉트시킨다.")
	public ResponseEntity<?> login(@RequestBody LoginReq loginReq, HttpServletResponse response,
		HttpServletRequest request) {
		//로그인 서비스호출
		return ResponseEntity.ok().build();
	}

	@GetMapping("/info")
	@Operation(summary = "유저 정보 조회 API", description = "마이페이지에서 필요한 사용자 정보를 조회한다.")
	public ResponseEntity<?> userInfo(Principal principal) {
		return ResponseEntity.ok().build();
	}
}
