package com.bell.thingdong.domain.albums.repository;

import static com.bell.thingdong.domain.albums.entity.QAlbums.*;

import com.bell.thingdong.domain.albums.entity.Albums;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomAlbumsRepositoryImpl implements CustomAlbumsRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		Albums album = jpaQueryFactory.selectFrom(albums).fetchFirst();
	}
}
