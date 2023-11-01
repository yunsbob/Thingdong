package com.bell.thingdong.domain.object.repository;

import java.util.List;

import com.bell.thingdong.domain.object.dto.UnBoxThingHistoryDto;

public interface CustomUnBoxThingHistoryRepository {
	List<UnBoxThingHistoryDto> findByUserId(Long userId);
}
