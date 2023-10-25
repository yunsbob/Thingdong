package com.bell.thingdong.domain.guestbook.repository;

import static com.bell.thingdong.domain.guestbook.entity.QGuestBook.*;

import com.bell.thingdong.domain.guestbook.entity.GuestBook;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomGuestBookRepositoryImpl implements CustomGuestBookRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		GuestBook guestBookOne = jpaQueryFactory.selectFrom(guestBook).fetchFirst();
	}
}
