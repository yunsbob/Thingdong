package com.bell.thingdong.domain.thing.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.thing.entity.ThingHistory;

public interface ThingHistoryRepository extends JpaRepository<ThingHistory, Long>, CustomThingHistoryRepository {
}