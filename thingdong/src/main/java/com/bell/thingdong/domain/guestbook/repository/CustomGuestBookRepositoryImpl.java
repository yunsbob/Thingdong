package com.bell.thingdong.domain.guestbook.repository;

import static com.bell.thingdong.domain.guestbook.entity.QGuestBook.*;
import static com.bell.thingdong.domain.user.entity.QUser.*;

import java.util.List;

import com.bell.thingdong.domain.guestbook.dto.response.GuestBookRes;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomGuestBookRepositoryImpl implements CustomGuestBookRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<GuestBookRes> findGuestBookByUserEmail(String userEmail) {
		return jpaQueryFactory.select(
			Projections.bean(GuestBookRes.class, guestBook.guestBookId, guestBook.content, guestBook.writer.email.as("writerId"), guestBook.writer.nickname.as("writerName"),
				guestBook.writeDay)).from(guestBook).join(guestBook.writer, user).where(guestBook.owner.email.eq(userEmail)).orderBy(guestBook.guestBookId.desc()).fetch();
	}
}
