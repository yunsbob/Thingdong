package com.bell.thingdong.domain.objet.repository;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.UnBoxThingHistoryDto;

public interface CustomUnBoxThingHistoryRepository {
	List<UnBoxThingHistoryDto> findByUserId(Long userId);
}
