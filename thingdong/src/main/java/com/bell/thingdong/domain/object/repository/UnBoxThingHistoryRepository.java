package com.bell.thingdong.domain.object.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.object.entity.UnBoxThingHistory;

public interface UnBoxThingHistoryRepository extends JpaRepository<UnBoxThingHistory, Long>, CustomUnBoxThingHistoryRepository {
}
