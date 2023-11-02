package com.bell.thingdong.domain.thinghistory.repository;

import static com.bell.thingdong.domain.thinghistory.entity.QThingHistory.*;

import java.util.List;

import com.bell.thingdong.domain.thinghistory.dto.FindThingHistoryDto;
import com.bell.thingdong.domain.thinghistory.entity.ThingHistory;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomThingHistoryRepositoryImpl implements CustomThingHistoryRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		ThingHistory thingHistoryOne = jpaQueryFactory.selectFrom(thingHistory).fetchFirst();
	}

	@Override
	public List<FindThingHistoryDto> findByUserId(Long userId) {
		return jpaQueryFactory.select(Projections.bean(FindThingHistoryDto.class, thingHistory.changeThing, thingHistory.thingContent, thingHistory.thingDay))
		                      .from(thingHistory)
		                      .where(thingHistory.userId.eq(userId))
		                      .orderBy(thingHistory.thingDay.desc())
		                      .limit(20)
		                      .fetch();
	}
}
