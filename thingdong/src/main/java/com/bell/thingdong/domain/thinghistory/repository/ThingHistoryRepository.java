package com.bell.thingdong.domain.thinghistory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.thinghistory.entity.ThingHistory;

public interface ThingHistoryRepository extends JpaRepository<ThingHistory, Long>, CustomThingHistoryRepository {
}