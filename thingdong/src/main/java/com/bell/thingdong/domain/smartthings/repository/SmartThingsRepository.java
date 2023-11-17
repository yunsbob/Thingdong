package com.bell.thingdong.domain.smartthings.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.smartthings.entity.SmartThings;

public interface SmartThingsRepository extends JpaRepository<SmartThings, Long> {
	List<SmartThings> findAllByDeviceId(String deviceId);

	SmartThings findByUserObject(UserObject userObject);
}