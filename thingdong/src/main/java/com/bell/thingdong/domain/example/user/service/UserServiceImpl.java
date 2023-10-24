package com.bell.thingdong.domain.example.user.service;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.global.util.CookieUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class UserServiceImpl implements UserService {
	private final RedisTemplate<String, Object> redisTemplate;

	@Override
	public void logout(HttpServletRequest request, HttpServletResponse response, String email) {
		// redis 토큰 삭제
		redisTemplate.delete("RT:" + email);
		// 쿠키 삭제
		CookieUtil.deleteCookie(request, response, "refresh_token");
	}
}
