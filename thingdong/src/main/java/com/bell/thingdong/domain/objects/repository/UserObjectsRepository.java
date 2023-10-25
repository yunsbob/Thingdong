package com.bell.thingdong.domain.objects.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.objects.entity.UserObjects;

public interface UserObjectsRepository extends JpaRepository<UserObjects, Long>, CustomUserObjectsRepository {
}