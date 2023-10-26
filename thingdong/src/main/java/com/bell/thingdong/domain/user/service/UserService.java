package com.bell.thingdong.domain.user.service;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.user.dto.request.SignUpReq;
import com.bell.thingdong.global.util.CookieUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {
	private final RedisTemplate<String, Object> redisTemplate;

	public void logout(HttpServletRequest request, HttpServletResponse response, String email) {
		// redis 토큰 삭제
		redisTemplate.delete("RT:" + email);
		// 쿠키 삭제
		CookieUtil.deleteCookie(request, response, "refresh_token");
	}

	public void login(HttpServletRequest request, HttpServletResponse response, String email) {
		// 쿠키 삭제
		CookieUtil.deleteCookie(request, response, "refresh_token");
	}

	public void signUp(SignUpReq signUpReq) {
		// 회원 가입
	}

	public void readUserInfo(String email) {
		// 사용자 정보 조회
	}
}
