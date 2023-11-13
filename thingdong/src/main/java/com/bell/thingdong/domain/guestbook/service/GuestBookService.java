package com.bell.thingdong.domain.guestbook.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.guestbook.dto.request.GuestBookReq;
import com.bell.thingdong.domain.guestbook.dto.response.GuestBookRes;
import com.bell.thingdong.domain.guestbook.entity.GuestBook;
import com.bell.thingdong.domain.guestbook.exception.GuestBookNotFoundException;
import com.bell.thingdong.domain.guestbook.exception.GuestBookUnauthorizedException;
import com.bell.thingdong.domain.guestbook.repository.GuestBookRepository;
import com.bell.thingdong.domain.thinghistory.service.ThingHistoryService;
import com.bell.thingdong.domain.user.entity.User;
import com.bell.thingdong.domain.user.exception.UserNotFoundException;
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
	private final ThingHistoryService thingHistoryService;

	@Transactional
	public void createGuestBook(String email, GuestBookReq guestBookReq) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
		User owner = userRepository.findByEmail(guestBookReq.getUserId()).orElseThrow(UserNotFoundException::new);

		GuestBook guestBook = GuestBook.builder().owner(owner).writer(user).content(guestBookReq.getContent()).build();

		user.setThingAmount(15L);
		thingHistoryService.createThingHistory(user, "방명록 작성", 15L);

		guestBookRepository.save(guestBook);
	}

	@Transactional
	public void deleteGuestBook(String email, Long guestBookId) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
		GuestBook guestBook = guestBookRepository.findById(guestBookId).orElseThrow(GuestBookNotFoundException::new);

		if (guestBook.getOwner().equals(user) || guestBook.getWriter().equals(user)) {
			guestBookRepository.delete(guestBook);
		} else {
			throw new GuestBookUnauthorizedException();
		}
	}

	public List<GuestBookRes> getGuestBookList(String email) {
		List<GuestBookRes> guestBookRes = guestBookRepository.findGuestBookByUserEmail(email);

		return guestBookRes;
	}
}
