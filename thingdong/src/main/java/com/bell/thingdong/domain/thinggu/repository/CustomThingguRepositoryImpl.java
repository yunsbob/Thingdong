package com.bell.thingdong.domain.thinggu.repository;

import static com.bell.thingdong.domain.thinggu.entity.QThinggu.*;

import com.bell.thingdong.domain.thinggu.entity.Thinggu;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomThingguRepositoryImpl implements CustomThingguRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		Thinggu thingguOne = jpaQueryFactory.selectFrom(thinggu).fetchFirst();
	}
}
