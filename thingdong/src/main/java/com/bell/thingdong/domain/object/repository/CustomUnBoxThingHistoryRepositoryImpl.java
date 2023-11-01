package com.bell.thingdong.domain.object.repository;

import static com.bell.thingdong.domain.object.entity.QUnBoxThingHistory.*;

import java.util.List;

import com.bell.thingdong.domain.object.dto.UnBoxThingHistoryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUnBoxThingHistoryRepositoryImpl implements CustomUnBoxThingHistoryRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<UnBoxThingHistoryDto> findByUserId(Long userId) {
		return jpaQueryFactory.select(
			                      Projections.bean(UnBoxThingHistoryDto.class, unBoxThingHistory.object.objectImagePath, unBoxThingHistory.objectName, unBoxThingHistory.purchaseDay))
		                      .from(unBoxThingHistory)
		                      .where(unBoxThingHistory.userId.eq(userId))
		                      .orderBy(unBoxThingHistory.purchaseDay.desc())
		                      .fetch();
	}
}
