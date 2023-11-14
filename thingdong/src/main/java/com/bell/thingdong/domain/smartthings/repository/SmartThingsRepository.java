package com.bell.thingdong.domain.smartthings.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.smartthings.entity.SmartThings;

public interface SmartThingsRepository extends JpaRepository<SmartThings, Long> {
	SmartThings findByDeviceId(String deviceId);

	SmartThings findByUserObject(UserObject userObject);
}