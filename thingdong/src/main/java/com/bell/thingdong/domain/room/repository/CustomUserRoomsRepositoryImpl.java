package com.bell.thingdong.domain.room.repository;

import static com.bell.thingdong.domain.room.entity.QUserRooms.*;

import com.bell.thingdong.domain.room.entity.UserRooms;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserRoomsRepositoryImpl implements CustomUserRoomsRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		UserRooms userRoom = jpaQueryFactory.selectFrom(userRooms).fetchFirst();
	}
}
