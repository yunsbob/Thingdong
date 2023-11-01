package com.bell.thingdong.domain.object.repository;

import static com.bell.thingdong.domain.object.entity.QUserObject.*;

import java.util.ArrayList;
import java.util.List;

import com.bell.thingdong.domain.object.dto.FindObjectDto;
import com.bell.thingdong.domain.object.dto.UserObjectStatus;
import com.bell.thingdong.domain.object.entity.UserObject;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserObjectRepositoryImpl implements CustomUserObjectRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<FindObjectDto> findObjectByUserIdAndObjectStatus(Long userId, UserObjectStatus userObjectStatus) {
		List<UserObject> userObjects = jpaQueryFactory.selectFrom(userObject).where(userObject.userId.eq(userId), userObject.userObjectStatus.ne(userObjectStatus)).fetch();

		List<FindObjectDto> findObjectList = new ArrayList<>();
		for (UserObject userObj : userObjects) {
			FindObjectDto findObjectDto = FindObjectDto.builder()
			                                           .userObjectId(userObj.getUserObjectId())
			                                           .objectStatus(userObj.getUserObjectStatus())
			                                           .object(userObj.getObject())
			                                           .build();
			findObjectList.add(findObjectDto);
		}

		return findObjectList;
	}
}
