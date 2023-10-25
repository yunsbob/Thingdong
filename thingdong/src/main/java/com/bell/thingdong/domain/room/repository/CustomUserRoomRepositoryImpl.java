package com.bell.thingdong.domain.room.repository;

import static com.bell.thingdong.domain.room.entity.QUserRoom.*;

import com.bell.thingdong.domain.room.entity.UserRoom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserRoomRepositoryImpl implements CustomUserRoomRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		UserRoom userRoomOne = jpaQueryFactory.selectFrom(userRoom).fetchFirst();
	}
}
