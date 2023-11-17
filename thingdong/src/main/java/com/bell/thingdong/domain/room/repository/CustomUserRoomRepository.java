package com.bell.thingdong.domain.room.repository;

import java.util.List;

import com.bell.thingdong.domain.room.dto.response.UserRoomRes;

public interface CustomUserRoomRepository {
	UserRoomRes findRoomByUserIdOrRoomId(Long userId, Long roomId);

	List<Long> findRoomIdByUserId(Long userId);
}
