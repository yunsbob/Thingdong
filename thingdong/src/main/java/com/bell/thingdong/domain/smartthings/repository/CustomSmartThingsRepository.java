package com.bell.thingdong.domain.smartthings.repository;

public interface CustomSmartThingsRepository {
	Boolean ExistByDeviceIdAndUserId(String deviceId, Long userId);
}
