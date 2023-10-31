package com.bell.thingdong.domain.object.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUnBoxThingHistoryRepositoryImpl implements CustomUnBoxThingHistoryRepository {
	private final JPAQueryFactory jpaQueryFactory;
}
