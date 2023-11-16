package com.bell.thingdong.domain.guestbook.repository;

import java.util.List;

import com.bell.thingdong.domain.guestbook.dto.response.GuestBookRes;

public interface CustomGuestBookRepository {
	List<GuestBookRes> findGuestBookByUserEmail(String userEmail);
}
