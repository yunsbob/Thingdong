package com.bell.thingdong.domain.thing.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.room.entity.UserRoom;

public interface ThingHistoryRepository extends JpaRepository<UserRoom, Long>, CustomThingHistoryRepository {
}