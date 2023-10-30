package com.bell.thingdong.domain.user.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.user.dto.request.LoginReq;
import com.bell.thingdong.domain.user.dto.request.SignUpReq;
import com.bell.thingdong.domain.user.dto.response.LoginRes;
import com.bell.thingdong.domain.user.dto.response.UserInfoRes;
import com.bell.thingdong.domain.user.dto.response.UserSearchRes;
import com.bell.thingdong.domain.user.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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

	@PostMapping("/login")
	@Operation(summary = "로그인 API", description = "사용자를 로그인 시키고 사용자 정보와 accessToken을 반환한다")
	public ResponseEntity<LoginRes> login(@RequestBody LoginReq loginReq, HttpServletResponse response, HttpServletRequest request) {
		LoginRes loginRes = userService.login(loginReq, request, response);
		return ResponseEntity.ok(loginRes);
	}

	@PostMapping("/logout")
	@Operation(summary = "로그아웃  API", description = "사용자를 로그아웃 시키고 / 로 리다이렉트 시킵니다.")
	public String logout(HttpServletRequest request, HttpServletResponse response, Principal principal) {
		userService.logout(request, response, principal.getName());
		return "redirect:https://thingdong.site/";
	}

	@PostMapping("/signUp")
	@Operation(summary = "회원가입 API", description = "사용자를 회원가입 시킵니다.")
	public ResponseEntity<?> signUp(@RequestBody SignUpReq signUpReq) {
		userService.signUp(signUpReq);
		return ResponseEntity.ok().build();
	}

	@GetMapping("/checkEmailDuplication")
	@Operation(summary = "이메일 중복확인용 API", description = "입력한 이메일의 중복을 확인한다. 409error -> 중복 , 200 -> 중복 아님")
	public ResponseEntity<?> checkEmailDuplication(@Parameter(description = "검증할 사용자 이메일을 입력한다.", required = true, example = "ssafy") @RequestParam("email") String email) {
		userService.checkDuplicatedEmail(email);
		return ResponseEntity.ok().build();
	}

	@GetMapping("/info")
	@Operation(summary = "유저 정보 조회 API", description = "마이페이지에서 필요한 사용자 정보를 조회한다.")
	public ResponseEntity<UserInfoRes> userInfo(Principal principal) {
		UserInfoRes userInfoRes = userService.readUserInfo(principal.getName());
		return ResponseEntity.ok(userInfoRes);
	}

	@GetMapping
	@Operation(summary = "유저 검색 API", description = "검색창에서 유저들을 검색한다.")
	public ResponseEntity<List<UserSearchRes>> userSearch(Principal principal, @Parameter(description = "유저 아이디를 입력한다.", example = "hello") @RequestParam("id") String id) {
		String email = principal.getName();

		List<UserSearchRes> userSearches = userService.getUserSearchInfo(email, id);

		return ResponseEntity.ok(userSearches);
	}
}
