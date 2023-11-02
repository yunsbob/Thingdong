package com.bell.thingdong.domain.object.repository;

import static com.bell.thingdong.domain.object.entity.QObject.*;

import java.util.List;

import com.bell.thingdong.domain.object.dto.ObjectCategory;
import com.bell.thingdong.domain.object.entity.Object;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomObjectRepositoryImpl implements CustomObjectRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		Object objectOne = jpaQueryFactory.selectFrom(object).fetchFirst();
	}

	@Override
	public List<Object> findAllObjectNotUnBoxThing() {
		return jpaQueryFactory.selectFrom(object).where(object.objectCategory.ne(ObjectCategory.UnBoxThing)).fetch();
	}
}
