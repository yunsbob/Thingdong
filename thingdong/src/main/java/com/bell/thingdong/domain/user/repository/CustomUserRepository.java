package com.bell.thingdong.domain.user.repository;

import java.util.List;

import com.bell.thingdong.domain.user.entity.User;

public interface CustomUserRepository {
	List<User> findUsersByEmail(String email);
}
