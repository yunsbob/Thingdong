package com.bell.thingdong.domain.objet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.objet.entity.UnBoxThingHistory;

public interface UnBoxThingHistoryRepository extends JpaRepository<UnBoxThingHistory, Long>, CustomUnBoxThingHistoryRepository {
}
