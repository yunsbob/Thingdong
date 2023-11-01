package com.bell.thingdong.domain.object.repository;

import static com.bell.thingdong.domain.object.entity.QObject.*;
import static com.bell.thingdong.domain.object.entity.QUserObject.*;

import java.util.ArrayList;
import java.util.List;

import com.bell.thingdong.domain.object.dto.FindObjectDto;
import com.bell.thingdong.domain.object.dto.ObjectCategory;
import com.bell.thingdong.domain.object.dto.UserObjectStatus;
import com.bell.thingdong.domain.object.entity.UserObject;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserObjectRepositoryImpl implements CustomUserObjectRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<FindObjectDto> findObjectByUserIdAndObjectStatusAndObjectCategory(Long userId, UserObjectStatus userObjectStatus, ObjectCategory objectCategory) {
		List<UserObject> userObjects = jpaQueryFactory.selectFrom(userObject)
		                                              .join(userObject.object, object)
		                                              .where(userObject.userId.eq(userId), userObjectStatusNe(userObjectStatus), objectCategoryNe(objectCategory))
		                                              .fetch();

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

	private BooleanExpression userObjectStatusNe(UserObjectStatus userObjectStatus) {
		return userObjectStatus == null ? null : userObject.userObjectStatus.ne(userObjectStatus);
	}

	private BooleanExpression objectCategoryNe(ObjectCategory objectCategory) {
		return objectCategory == null ? null : userObject.object.objectCategory.ne(objectCategory);
	}
}
