package com.bell.thingdong.domain.object.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.object.entity.Object;

public interface ObjectRepository extends JpaRepository<Object, Long>, CustomObjectRepository {
}