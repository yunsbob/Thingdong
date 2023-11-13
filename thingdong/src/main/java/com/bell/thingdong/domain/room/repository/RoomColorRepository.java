package com.bell.thingdong.domain.room.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.room.entity.RoomColor;

public interface RoomColorRepository extends JpaRepository<RoomColor, String> {
}