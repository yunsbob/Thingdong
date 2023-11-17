package com.bell.thingdong.domain.user.repository;

import static com.bell.thingdong.domain.user.entity.QUser.*;

import java.util.List;

import com.bell.thingdong.domain.user.entity.User;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserRepositoryImpl implements CustomUserRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<User> findUsersByEmail(String email) {
		return jpaQueryFactory.selectFrom(user).where(user.email.contains(email)).orderBy(user.nickname.asc()).fetch();
	}
}
