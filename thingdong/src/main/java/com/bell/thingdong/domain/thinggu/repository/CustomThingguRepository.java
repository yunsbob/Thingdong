package com.bell.thingdong.domain.thinggu.repository;

import java.util.List;

import com.bell.thingdong.domain.thinggu.entity.Thinggu;

public interface CustomThingguRepository {
	List<Thinggu> findThingguByUserIdOrThingguId(Long userId, Long thingguId);
}
