package com.bell.thingdong.domain.thinggu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.thinggu.entity.Thinggu;

public interface ThingguRepository extends JpaRepository<Thinggu, Long>, CustomThingguRepository {
	public void deleteByThingguId(Long thingguId);
}