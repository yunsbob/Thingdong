package com.bell.thingdong.domain.example.user.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface UserService {
	void logout(HttpServletRequest request, HttpServletResponse response, String email);
}
