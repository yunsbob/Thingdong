package com.bell.thingdong.domain.guestbooks.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.guestbooks.entity.GuestBooks;

public interface GuestBooksRepository extends JpaRepository<GuestBooks, Long>, CustomGuestBooksRepository {
}