package com.bell.thingdong.domain.objet.repository;

import java.util.List;

import com.bell.thingdong.domain.objet.entity.Objet;

public interface CustomObjetRepository {
	List<Objet> findAllObjectNotUnBoxThingAndSmartThings();
}
