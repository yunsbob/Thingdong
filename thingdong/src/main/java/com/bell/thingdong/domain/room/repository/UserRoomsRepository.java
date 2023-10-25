package com.bell.thingdong.domain.room.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.room.entity.UserRooms;

public interface UserRoomsRepository extends JpaRepository<UserRooms, Long>, CustomUserRoomsRepository {
}