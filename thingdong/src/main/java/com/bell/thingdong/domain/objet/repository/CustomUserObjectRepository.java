package com.bell.thingdong.domain.objet.repository;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.FindObjectDto;
import com.bell.thingdong.domain.objet.dto.ObjectCategory;
import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.objet.entity.UserObject;

public interface CustomUserObjectRepository {
	List<FindObjectDto> findObjectByUserIdAndObjectStatusAndObjectCategory(Long userId, UserObjectStatus userObjectStatus, ObjectCategory objectCategory);

	List<UserObject> findUserObjectByRoomId(Long roomId);
}
