package com.bell.thingdong.domain.album.repository;

import static com.bell.thingdong.domain.album.entity.QAlbum.*;

import com.bell.thingdong.domain.album.entity.Album;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomAlbumRepositoryImpl implements CustomAlbumRepository {
	private final JPAQueryFactory jpaQueryFactory;

	public void example() {
		Album albumOne = jpaQueryFactory.selectFrom(album).fetchFirst();
	}
}
