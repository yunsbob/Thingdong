package com.bell.thingdong.domain.album.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.album.entity.Album;

public interface AlbumRepository extends JpaRepository<Album, Long>, CustomAlbumRepository {
}
