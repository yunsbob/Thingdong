package com.bell.thingdong.domain.thinggu.repository;

import static com.bell.thingdong.domain.thinggu.entity.QThinggu.*;

import java.util.List;

import com.bell.thingdong.domain.thinggu.entity.Thinggu;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomThingguRepositoryImpl implements CustomThingguRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<Thinggu> findThingguByUserId(Long userId) {
		return jpaQueryFactory.selectFrom(thinggu).where(thinggu.userId.id.eq(userId)).fetch();
	}
}
