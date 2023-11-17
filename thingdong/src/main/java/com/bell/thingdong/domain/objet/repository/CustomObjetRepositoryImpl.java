package com.bell.thingdong.domain.objet.repository;

import static com.bell.thingdong.domain.objet.entity.QObjet.*;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.ObjectCategory;
import com.bell.thingdong.domain.objet.entity.Objet;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomObjetRepositoryImpl implements CustomObjetRepository {
	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<Objet> findAllObjectNotUnBoxThingAndSmartThings() {
		return jpaQueryFactory.selectFrom(objet).where(objet.objectCategory.ne(ObjectCategory.UnBoxThing), objet.objectCategory.ne(ObjectCategory.SmartThings)).fetch();
	}
}
