package com.bell.thingdong.domain.guestbook.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.guestbook.dto.request.GuestBookReq;
import com.bell.thingdong.domain.guestbook.entity.GuestBook;
import com.bell.thingdong.domain.guestbook.repository.GuestBookRepository;
import com.bell.thingdong.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GuestBookService {
	private final UserRepository userRepository;
	private final GuestBookRepository guestBookRepository;

	@Transactional
	public void createGuestBook(String email, GuestBookReq guestBookReq) {
		GuestBook guestBook = GuestBook.builder().userEmail(guestBookReq.getUserId()).writerEmail(email).content(guestBookReq.getContent()).build();

		System.out.println(guestBookReq.getContent());

		guestBookRepository.save(guestBook);
	}
}
