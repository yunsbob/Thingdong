package com.bell.thingdong.domain.thinggu.repository;

import static com.bell.thingdong.domain.thinggu.entity.QThinggu.*;
import static com.bell.thingdong.domain.user.entity.QUser.*;

import java.util.List;

import com.bell.thingdong.domain.thinggu.entity.Thinggu;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomThingguRepositoryImpl implements CustomThingguRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<Thinggu> findThingguByUserIdOrThingguId(Long userId, Long thingguId) {
		return jpaQueryFactory.selectFrom(thinggu).join(thinggu.userId, user).where(userIdEq(userId), thingguIdEq(thingguId)).fetch();
	}

	private BooleanExpression userIdEq(Long userId) {
		return userId == null ? null : thinggu.userId.id.eq(userId);
	}

	private BooleanExpression thingguIdEq(Long thingguId) {
		return thingguId == null ? null : thinggu.thingguId.id.eq(thingguId);
	}
}
