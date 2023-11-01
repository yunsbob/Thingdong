package com.bell.thingdong.domain.object.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.object.dto.UserObjectStatus;
import com.bell.thingdong.domain.object.entity.UserObject;
import com.bell.thingdong.domain.object.exception.UserObjectNotFoundException;
import com.bell.thingdong.domain.object.repository.UserObjectRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ObjectService {
	private final UserObjectRepository userObjectRepository;

	@Transactional
	public void purchaseObject(Long userObjectId) {
		UserObject userObject = userObjectRepository.findById(userObjectId).orElseThrow(UserObjectNotFoundException::new);

		userObject.setUserObjectStatus(UserObjectStatus.Inventory);
	}

	@Transactional
	public void deleteObject(Long userObjectId) {
		UserObject userObject = userObjectRepository.findById(userObjectId).orElseThrow(UserObjectNotFoundException::new);

		userObjectRepository.delete(userObject);
	}
}
