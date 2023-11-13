package com.bell.thingdong.domain.objet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.objet.entity.UserObject;

public interface UserObjectRepository extends JpaRepository<UserObject, Long>, CustomUserObjectRepository {
}