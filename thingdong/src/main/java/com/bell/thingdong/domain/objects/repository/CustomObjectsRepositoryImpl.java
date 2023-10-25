package com.bell.thingdong.domain.objects.repository;

import static com.bell.thingdong.domain.objects.entity.QObjects.objects;

import com.bell.thingdong.domain.objects.entity.Objects;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomObjectsRepositoryImpl implements CustomObjectsRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		Objects object = jpaQueryFactory.selectFrom(objects).fetchFirst();
	}
}
