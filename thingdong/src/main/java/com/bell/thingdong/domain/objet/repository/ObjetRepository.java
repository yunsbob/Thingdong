package com.bell.thingdong.domain.objet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.objet.entity.Objet;

public interface ObjetRepository extends JpaRepository<Objet, Long>, CustomObjetRepository {
}