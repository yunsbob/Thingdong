package com.bell.thingdong.domain.room.repository;

import static com.bell.thingdong.domain.room.entity.QUserRoom.*;

import java.util.ArrayList;
import java.util.List;

import com.bell.thingdong.domain.objet.dto.UserObjectRoomDto;
import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.room.dto.response.UserRoomRes;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserRoomRepositoryImpl implements CustomUserRoomRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public UserRoomRes findRoomByUserIdOrRoomId(Long userId, Long roomId) {
		UserRoom userRoomOne = jpaQueryFactory.selectFrom(userRoom).where(userIdEq(userId), roomIdEq(roomId)).fetchFirst();

		UserRoomRes userRoomRes = new UserRoomRes();
		List<UserObjectRoomDto> userObjectRoomDtoList = new ArrayList<>();
		for (UserObject userObject : userRoomOne.getUserObjectList()) {
			UserObjectRoomDto userObjectRoomDto = UserObjectRoomDto.builder()
			                                                       .userObjectId(userObject.getUserObjectId())
			                                                       .objectModelPath(userObject.getObjet().getObjectModelPath())
			                                                       .build();
			userObjectRoomDtoList.add(userObjectRoomDto);
		}
		userRoomRes.setUserObjectList(userObjectRoomDtoList);
		userRoomRes.setRoomColor(userRoomOne.getRoomColor());
		userRoomRes.setUserId(userRoomOne.getUser().getEmail());
		userRoomRes.setRoomId(userRoomOne.getRoomId());

		return userRoomRes;
	}

	@Override
	public List<Long> findRoomIdByUserId(Long userId) {
		return jpaQueryFactory.select(userRoom.roomId).from(userRoom).where(userRoom.user.id.eq(userId)).orderBy(userRoom.roomId.asc()).fetch();
	}

	private BooleanExpression userIdEq(Long userId) {
		return userId == null ? null : userRoom.user.id.eq(userId);
	}

	private BooleanExpression roomIdEq(Long roomId) {
		return roomId == null ? null : userRoom.roomId.eq(roomId);
	}
}
