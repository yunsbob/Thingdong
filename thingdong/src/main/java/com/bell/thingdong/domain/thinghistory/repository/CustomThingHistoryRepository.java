package com.bell.thingdong.domain.thinghistory.repository;

import java.util.List;

import com.bell.thingdong.domain.thinghistory.dto.FindThingHistoryDto;

public interface CustomThingHistoryRepository {
	List<FindThingHistoryDto> findByUserId(Long userId);
}
