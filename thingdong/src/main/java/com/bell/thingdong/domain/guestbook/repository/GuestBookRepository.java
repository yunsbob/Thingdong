package com.bell.thingdong.domain.guestbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.guestbook.entity.GuestBook;

public interface GuestBookRepository extends JpaRepository<GuestBook, Long>, CustomGuestBookRepository {
}