package com.bell.thingdong.domain.object.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.object.entity.UserObject;

public interface UserObjectRepository extends JpaRepository<UserObject, Long>, CustomUserObjectRepository {
}