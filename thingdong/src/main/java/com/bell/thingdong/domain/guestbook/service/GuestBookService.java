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

	@Transactional
	public void createGuestBook(String email, GuestBookReq guestBookReq) {
		GuestBook guestBook = GuestBook.builder().userEmail(guestBookReq.getUserId()).writerEmail(email).content(guestBookReq.getContent()).build();

		System.out.println(guestBookReq.getContent());

		guestBookRepository.save(guestBook);
	}

	@Transactional
	public void deleteGuestBook(String email, Long guestBookId) {
		GuestBook guestBook = guestBookRepository.findById(guestBookId).orElseThrow(GuestBookNotFoundException::new);

		if (guestBook.getUserEmail().equals(email) || guestBook.getWriterEmail().equals(email)) {
			guestBookRepository.delete(guestBook);
		} else {
			throw new GuestBookUnauthorizedException();
		}
	}

	public GuestBookRes getGuestBook(String email, Long guestBookId) {
		GuestBookRes guestBookRes;
		User writer;

		if (email != null) {
			guestBookRes = guestBookRepository.findGuestBookByUserIdOrGuestBookId(email, null);
			if (guestBookRes == null)
				throw new GuestBookNotFoundException();
			writer = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
			guestBookRes.setWriterName(writer.getNickname());
		} else {
			guestBookRes = guestBookRepository.findGuestBookByUserIdOrGuestBookId(null, guestBookId);
			writer = userRepository.findByEmail(guestBookRes.getWriterId()).orElseThrow(UserNotFoundException::new);
			guestBookRes.setWriterName(writer.getNickname());
		}

		List<Long> guestBooks = guestBookRepository.findGuestBookIdByUserEmail(writer.getEmail());
		for (int i = 0; i < guestBooks.size(); i++) {
			if (guestBooks.get(i) == guestBookRes.getGuestBookId()) {
				if (i == 0) {
					guestBookRes.setPrevGuestBookId(0L);
				} else {
					guestBookRes.setPrevGuestBookId(guestBooks.get(i - 1));
				}
				if (i == guestBooks.size() - 1) {
					guestBookRes.setNextGuestBookId(0L);
				} else {
					guestBookRes.setNextGuestBookId(guestBooks.get(i + 1));
				}
				break;
			}
		}

		return guestBookRes;
	}
}
