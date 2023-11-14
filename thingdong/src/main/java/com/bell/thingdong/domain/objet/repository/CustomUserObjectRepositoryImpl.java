package com.bell.thingdong.domain.objet.repository;

import static com.bell.thingdong.domain.objet.entity.QObjet.*;
import static com.bell.thingdong.domain.objet.entity.QUserObject.*;

import java.util.ArrayList;
import java.util.List;

import com.bell.thingdong.domain.objet.dto.FindObjectDto;
import com.bell.thingdong.domain.objet.dto.ObjectCategory;
import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.objet.entity.UserObject;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomUserObjectRepositoryImpl implements CustomUserObjectRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<FindObjectDto> findObjectByUserIdAndObjectStatusAndObjectCategory(Long userId, UserObjectStatus userObjectStatus, ObjectCategory objectCategory) {
		List<UserObject> userObjects = jpaQueryFactory.selectFrom(userObject)
		                                              .join(userObject.objet, objet)
		                                              .where(userObject.user.id.eq(userId), userObjectStatusNe(userObjectStatus), objectCategoryNe(objectCategory))
		                                              .fetch();

		List<FindObjectDto> findObjectList = new ArrayList<>();
		for (UserObject userObj : userObjects) {
			FindObjectDto findObjectDto = FindObjectDto.builder()
			                                           .userObjectId(userObj.getUserObjectId())
			                                           .objectStatus(userObj.getUserObjectStatus())
			                                           .objet(userObj.getObjet())
			                                           .build();
			findObjectList.add(findObjectDto);
		}

		return findObjectList;
	}

	@Override
	public List<UserObject> findUserObjectIdByRoomId(Long roomId) {
		return jpaQueryFactory.selectFrom(userObject).where(userObject.room.roomId.eq(roomId)).orderBy(userObject.userObjectId.asc()).fetch();
	}

	private BooleanExpression userObjectStatusNe(UserObjectStatus userObjectStatus) {
		return userObjectStatus == null ? null : userObject.userObjectStatus.ne(userObjectStatus);
	}

	private BooleanExpression objectCategoryNe(ObjectCategory objectCategory) {
		return objectCategory == null ? null : userObject.objet.objectCategory.ne(objectCategory);
	}
}
