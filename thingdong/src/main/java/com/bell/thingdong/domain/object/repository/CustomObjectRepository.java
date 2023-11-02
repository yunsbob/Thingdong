package com.bell.thingdong.domain.object.repository;

import java.util.List;

import com.bell.thingdong.domain.object.entity.Object;

public interface CustomObjectRepository {
	List<Object> findAllObjectNotUnBoxThing();
}
