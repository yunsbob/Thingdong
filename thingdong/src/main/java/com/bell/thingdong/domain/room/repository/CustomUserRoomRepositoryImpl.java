package com.bell.thingdong.domain.room.repository;

import static com.bell.thingdong.domain.room.entity.QUserRoom.*;

import java.util.ArrayList;
import java.util.List;

import com.bell.thingdong.domain.objet.dto.ObjectCategory;
import com.bell.thingdong.domain.objet.dto.ObjectSizeDto;
import com.bell.thingdong.domain.objet.dto.UserObjectRoomDto;
import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.room.dto.response.UserRoomRes;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.bell.thingdong.domain.smartthings.dto.SmartThingsRoomDto;
import com.bell.thingdong.domain.smartthings.entity.SmartThings;
import com.bell.thingdong.domain.smartthings.repository.SmartThingsRepository;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserRoomRepositoryImpl implements CustomUserRoomRepository {
	private final JPAQueryFactory jpaQueryFactory;
	private final SmartThingsRepository smartThingsRepository;

	@Override
	public UserRoomRes findRoomByUserIdOrRoomId(Long userId, Long roomId) {
		UserRoom userRoomOne = jpaQueryFactory.selectFrom(userRoom).where(userIdEq(userId), roomIdEq(roomId)).fetchFirst();

		UserRoomRes userRoomRes = new UserRoomRes();
		List<UserObjectRoomDto> userObjectRoomDtoList = new ArrayList<>();
		List<SmartThingsRoomDto> smartThingsRoomDtoList = new ArrayList<>();
		for (UserObject userObject : userRoomOne.getUserObjectList()) {
			List<Double> positionList = new ArrayList<>();
			positionList.add(userObject.getX());
			positionList.add(userObject.getY());
			positionList.add(userObject.getZ());

			List<Double> rotationList = new ArrayList<>();
			rotationList.add(userObject.getRotationX());
			rotationList.add(userObject.getRotationY());
			rotationList.add(userObject.getRotationZ());

			ObjectSizeDto objectSizeDto = ObjectSizeDto.builder().width(userObject.getObjet().getObjectWidth()).height(userObject.getObjet().getObjectHeight()).build();

			if (userObject.getObjet().getObjectCategory().equals(ObjectCategory.SmartThings)) {
				SmartThings smartThings = smartThingsRepository.findByUserObject(userObject);

				SmartThingsRoomDto smartThingsRoomDto = SmartThingsRoomDto.builder()
				                                                          .userObjectId(userObject.getUserObjectId())
				                                                          .objectModelPath(smartThings.getStatus().equals("Y") ? smartThings.getActivationPath() :
					                                                          userObject.getObjet().getObjectModelPath())
				                                                          .name(userObject.getObjet().getObjectName())
				                                                          .isWall(userObject.getObjet().getIsWall().equals("Y") ? Boolean.TRUE : Boolean.FALSE)
				                                                          .position(positionList)
				                                                          .rotation(rotationList)
				                                                          .size(objectSizeDto)
				                                                          .deviceId(smartThings.getDeviceId())
				                                                          .smartThingsStatus(smartThings.getStatus().equals("Y") ? Boolean.TRUE : Boolean.FALSE)
				                                                          .build();

				smartThingsRoomDtoList.add(smartThingsRoomDto);
			} else {
				UserObjectRoomDto userObjectRoomDto = UserObjectRoomDto.builder()
				                                                       .userObjectId(userObject.getUserObjectId())
				                                                       .objectModelPath(userObject.getObjet().getObjectModelPath())
				                                                       .name(userObject.getObjet().getObjectName())
				                                                       .isWall(userObject.getObjet().getIsWall().equals("Y") ? Boolean.TRUE : Boolean.FALSE)
				                                                       .position(positionList)
				                                                       .rotation(rotationList)
				                                                       .size(objectSizeDto)
				                                                       .build();

				userObjectRoomDtoList.add(userObjectRoomDto);
			}
		}
		userRoomRes.setUserObjectList(userObjectRoomDtoList);
		userRoomRes.setSmartThingsList(smartThingsRoomDtoList);
		userRoomRes.setRoomColor(userRoomOne.getRoomColor().getRoomColor());
		userRoomRes.setRoomColorPath(userRoomOne.getRoomColor().getRoomModelPath());
		userRoomRes.setUserId(userRoomOne.getUser().getEmail());
		userRoomRes.setRoomId(userRoomOne.getRoomId());
		userRoomRes.setDarkMode(userRoomOne.getDarkMode().equals("Y") ? Boolean.TRUE : Boolean.FALSE);

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
