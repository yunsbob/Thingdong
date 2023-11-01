package com.bell.thingdong.domain.object.repository;

import java.util.List;

import com.bell.thingdong.domain.object.dto.FindObjectDto;
import com.bell.thingdong.domain.object.dto.UserObjectStatus;

public interface CustomUserObjectRepository {
	List<FindObjectDto> findObjectByUserIdAndObjectStatus(Long userId, UserObjectStatus userObjectStatus);
}
