package com.bell.thingdong.domain.guestbooks.repository;

import static com.bell.thingdong.domain.guestbooks.entity.QGuestBooks.*;

import com.bell.thingdong.domain.guestbooks.entity.GuestBooks;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomGuestBooksRepositoryImpl implements CustomGuestBooksRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		GuestBooks guestBook = jpaQueryFactory.selectFrom(guestBooks).fetchFirst();
	}
}
