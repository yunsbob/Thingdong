package com.bell.thingdong.domain.thinggus.repository;

import static com.bell.thingdong.domain.thinggus.entity.QThinggus.*;

import com.bell.thingdong.domain.thinggus.entity.Thinggus;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomThinggusRepositoryImpl implements CustomThinggusRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		Thinggus thinggu = jpaQueryFactory.selectFrom(thinggus).fetchFirst();
	}
}
