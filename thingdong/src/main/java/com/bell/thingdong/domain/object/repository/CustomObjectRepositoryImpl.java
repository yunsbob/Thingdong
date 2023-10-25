package com.bell.thingdong.domain.object.repository;

import static com.bell.thingdong.domain.object.entity.QObject.*;

import com.bell.thingdong.domain.object.entity.Object;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomObjectRepositoryImpl implements CustomObjectRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		Object objectOne = jpaQueryFactory.selectFrom(object).fetchFirst();
	}
}
