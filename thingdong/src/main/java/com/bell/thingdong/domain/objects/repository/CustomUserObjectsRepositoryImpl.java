package com.bell.thingdong.domain.objects.repository;

import static com.bell.thingdong.domain.objects.entity.QUserObjects.*;

import com.bell.thingdong.domain.objects.entity.UserObjects;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserObjectsRepositoryImpl implements CustomUserObjectsRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		UserObjects userObject = jpaQueryFactory.selectFrom(userObjects).fetchFirst();
	}
}
