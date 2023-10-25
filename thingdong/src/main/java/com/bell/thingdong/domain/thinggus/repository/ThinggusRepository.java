package com.bell.thingdong.domain.thinggus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.thinggus.entity.Thinggus;

public interface ThinggusRepository extends JpaRepository<Thinggus, Long>, CustomThinggusRepository {
}