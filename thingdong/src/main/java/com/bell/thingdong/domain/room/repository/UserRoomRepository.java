package com.bell.thingdong.domain.room.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.room.entity.UserRoom;

public interface UserRoomRepository extends JpaRepository<UserRoom, Long>, CustomUserRoomRepository {
}