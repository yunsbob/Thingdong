package com.bell.thingdong.domain.guestbook.repository;

import static com.bell.thingdong.domain.guestbook.entity.QGuestBook.*;

import java.util.List;

import com.bell.thingdong.domain.guestbook.dto.response.GuestBookRes;
import com.bell.thingdong.domain.guestbook.entity.GuestBook;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomGuestBookRepositoryImpl implements CustomGuestBookRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public GuestBookRes findGuestBookByUserIdOrGuestBookId(String userEmail, Long guestBookId) {
		GuestBook guestBookOne = jpaQueryFactory.selectFrom(guestBook).where(userEmailEq(userEmail), guestBookIdEq(guestBookId)).fetchFirst();

		if (guestBookOne == null)
			return null;

		return GuestBookRes.builder()
		                   .guestBookId(guestBookOne.getGuestBookId())
		                   .writerId(guestBookOne.getWriterEmail())
		                   .content(guestBookOne.getContent())
		                   .writeDay(guestBookOne.getWriteDay().toLocalDate())
		                   .build();
	}

	@Override
	public List<Long> findGuestBookIdByUserEmail(String userEmail) {
		return jpaQueryFactory.select(guestBook.guestBookId).from(guestBook).where(guestBook.userEmail.eq(userEmail)).orderBy(guestBook.guestBookId.asc()).fetch();
	}

	private BooleanExpression userEmailEq(String userEmail) {
		return userEmail == null ? null : guestBook.userEmail.eq(userEmail);
	}

	private BooleanExpression guestBookIdEq(Long guestBookId) {
		return guestBookId == null ? null : guestBook.guestBookId.eq(guestBookId);
	}

}
