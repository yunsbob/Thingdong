package com.bell.thingdong.domain.room.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.room.entity.UserRoom;

public interface UserRoomRepository extends JpaRepository<UserRoom, Long>, CustomUserRoomRepository {
	List<UserRoom> findAllByUserId(Long userId);
}