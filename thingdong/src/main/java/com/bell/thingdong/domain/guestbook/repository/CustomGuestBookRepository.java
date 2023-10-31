package com.bell.thingdong.domain.guestbook.repository;

import java.util.List;

import com.bell.thingdong.domain.guestbook.dto.response.GuestBookRes;

public interface CustomGuestBookRepository {
	GuestBookRes findGuestBookByUserIdOrGuestBookId(String userEmail, Long guestBookId);

	List<Long> findGuestBookIdByUserEmail(String userEmail);
}
