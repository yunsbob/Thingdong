package com.bell.thingdong.domain.objects.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.objects.entity.Objects;

public interface ObjectsRepository extends JpaRepository<Objects, Long>, CustomObjectsRepository {
}