package com.bell.thingdong.domain.objet.repository;

import static com.bell.thingdong.domain.objet.entity.QUnBoxThingHistory.*;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.UnBoxThingHistoryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUnBoxThingHistoryRepositoryImpl implements CustomUnBoxThingHistoryRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<UnBoxThingHistoryDto> findByUserId(Long userId) {
		return jpaQueryFactory.select(
			                      Projections.bean(UnBoxThingHistoryDto.class, unBoxThingHistory.objet.objectImagePath, unBoxThingHistory.objetName.as("objectName"), unBoxThingHistory.purchaseDay))
		                      .from(unBoxThingHistory)
		                      .where(unBoxThingHistory.user.id.eq(userId))
		                      .orderBy(unBoxThingHistory.unBoxThingHistoryId.desc())
		                      .fetch();
	}
}
