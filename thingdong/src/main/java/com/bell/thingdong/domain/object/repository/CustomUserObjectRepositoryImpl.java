package com.bell.thingdong.domain.object.repository;

import static com.bell.thingdong.domain.object.entity.QUserObject.*;

import com.bell.thingdong.domain.object.entity.UserObject;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserObjectRepositoryImpl implements CustomUserObjectRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		UserObject userObjectOne = jpaQueryFactory.selectFrom(userObject).fetchFirst();
	}
}
