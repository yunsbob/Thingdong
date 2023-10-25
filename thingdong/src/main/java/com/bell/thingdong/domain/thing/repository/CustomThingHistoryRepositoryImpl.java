package com.bell.thingdong.domain.thing.repository;

import static com.bell.thingdong.domain.thing.entity.QThingHistory.*;

import com.bell.thingdong.domain.thing.entity.ThingHistory;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomThingHistoryRepositoryImpl implements CustomThingHistoryRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		ThingHistory thingHistoryOne = jpaQueryFactory.selectFrom(thingHistory).fetchFirst();
	}
}
