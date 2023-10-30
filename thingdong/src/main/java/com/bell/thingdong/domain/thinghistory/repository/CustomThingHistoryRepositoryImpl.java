package com.bell.thingdong.domain.thinghistory.repository;

import static com.bell.thingdong.domain.thinghistory.entity.QThingHistory.*;

import com.bell.thingdong.domain.thinghistory.entity.ThingHistory;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomThingHistoryRepositoryImpl implements CustomThingHistoryRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		ThingHistory thingHistoryOne = jpaQueryFactory.selectFrom(thingHistory).fetchFirst();
	}
}
