package com.bell.thingdong.domain.albums.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.albums.entity.Albums;

public interface AlbumsRepository extends JpaRepository<Albums, Long>, CustomAlbumsRepository {
}
