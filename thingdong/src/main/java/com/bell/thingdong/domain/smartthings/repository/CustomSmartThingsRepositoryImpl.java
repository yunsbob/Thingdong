package com.bell.thingdong.domain.smartthings.repository;

import static com.bell.thingdong.domain.objet.entity.QUserObject.*;
import static com.bell.thingdong.domain.smartthings.entity.QSmartThings.*;

import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomSmartThingsRepositoryImpl implements CustomSmartThingsRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public Boolean ExistByDeviceIdAndUserId(String deviceId, Long userId) {
		return jpaQueryFactory.selectFrom(smartThings).join(smartThings.userObject, userObject).where(smartThings.deviceId.eq(deviceId), userObject.user.id.eq(userId)).fetchFirst()
			!= null;
	}
}
