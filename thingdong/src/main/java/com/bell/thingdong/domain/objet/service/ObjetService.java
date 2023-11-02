package com.bell.thingdong.domain.objet.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.objet.dto.FindObjectDto;
import com.bell.thingdong.domain.objet.dto.ObjectCategory;
import com.bell.thingdong.domain.objet.dto.ObjectInventoryDto;
import com.bell.thingdong.domain.objet.dto.ObjectRoomInventoryDto;
import com.bell.thingdong.domain.objet.dto.UnBoxThingHistoryDto;
import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.objet.dto.response.ObjectInventoryRes;
import com.bell.thingdong.domain.objet.dto.response.ObjectRoomInventoryRes;
import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.objet.exception.ObjectCategoryNotFoundException;
import com.bell.thingdong.domain.objet.exception.UserObjectNotFoundException;
import com.bell.thingdong.domain.objet.repository.UnBoxThingHistoryRepository;
import com.bell.thingdong.domain.objet.repository.UserObjectRepository;
import com.bell.thingdong.domain.user.entity.User;
import com.bell.thingdong.domain.user.exception.UserNotFoundException;
import com.bell.thingdong.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ObjetService {
	private final UnBoxThingHistoryRepository unBoxThingHistoryRepository;
	private final UserObjectRepository userObjectRepository;
	private final UserRepository userRepository;

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

	public ObjectRoomInventoryRes getRoomInventoryObject(String email) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		List<ObjectRoomInventoryDto> furnitureList = new ArrayList<>();
		List<ObjectRoomInventoryDto> homeApplianceList = new ArrayList<>();
		List<ObjectRoomInventoryDto> propList = new ArrayList<>();
		List<ObjectRoomInventoryDto> floorList = new ArrayList<>();
		List<ObjectRoomInventoryDto> smartThingsList = new ArrayList<>();
		List<ObjectRoomInventoryDto> unBoxThingList = new ArrayList<>();

		List<FindObjectDto> objectRoomInventoryDtoList = userObjectRepository.findObjectByUserIdAndObjectStatusAndObjectCategory(user.getId(), UserObjectStatus.Shop, null);

		for (FindObjectDto findObjectDto : objectRoomInventoryDtoList) {
			ObjectRoomInventoryDto objectRoomInventoryDto = ObjectRoomInventoryDto.builder()
			                                                                      .userObjectId(findObjectDto.getUserObjectId())
			                                                                      .objectImagePath(findObjectDto.getObjet().getObjectImagePath())
			                                                                      .build();

			if (findObjectDto.getObjectStatus().equals(UserObjectStatus.Room))
				objectRoomInventoryDto.setObjectStatus("Y");
			else
				objectRoomInventoryDto.setObjectStatus("N");

			if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Furniture)) {
				furnitureList.add(objectRoomInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.HomeAppliances)) {
				homeApplianceList.add(objectRoomInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Prop)) {
				propList.add(objectRoomInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Floor)) {
				floorList.add(objectRoomInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.SmartThings)) {
				smartThingsList.add(objectRoomInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.UnBoxThing)) {
				unBoxThingList.add(objectRoomInventoryDto);
			} else {
				throw new ObjectCategoryNotFoundException();
			}
		}

		return ObjectRoomInventoryRes.builder()
		                             .furnitureList(furnitureList)
		                             .homeApplianceList(homeApplianceList)
		                             .propList(propList)
		                             .floorList(floorList)
		                             .smartThingsList(smartThingsList)
		                             .unBoxThingList(unBoxThingList)
		                             .build();
	}

	public ObjectInventoryRes getInventoryObject(String email) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		List<ObjectInventoryDto> furnitureList = new ArrayList<>();
		List<ObjectInventoryDto> homeApplianceList = new ArrayList<>();
		List<ObjectInventoryDto> propList = new ArrayList<>();
		List<ObjectInventoryDto> floorList = new ArrayList<>();
		List<ObjectInventoryDto> smartThingsList = new ArrayList<>();

		List<FindObjectDto> objectInventoryDtoList = userObjectRepository.findObjectByUserIdAndObjectStatusAndObjectCategory(user.getId(), null, ObjectCategory.UnBoxThing);

		for (FindObjectDto findObjectDto : objectInventoryDtoList) {
			ObjectInventoryDto objectInventoryDto = ObjectInventoryDto.builder()
			                                                          .userObjectId(findObjectDto.getUserObjectId())
			                                                          .objectImagePath(findObjectDto.getObjet().getObjectImagePath())
			                                                          .objectThing(findObjectDto.getObjet().getObjectThing())
			                                                          .build();

			if (findObjectDto.getObjectStatus().equals(UserObjectStatus.Shop))
				objectInventoryDto.setObjectStatus("N");
			else
				objectInventoryDto.setObjectStatus("Y");

			if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Furniture)) {
				furnitureList.add(objectInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.HomeAppliances)) {
				homeApplianceList.add(objectInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Prop)) {
				propList.add(objectInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Floor)) {
				floorList.add(objectInventoryDto);
			} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.SmartThings)) {
				smartThingsList.add(objectInventoryDto);
			} else {
				throw new ObjectCategoryNotFoundException();
			}
		}

		List<UnBoxThingHistoryDto> unBoxThingHistoryList = unBoxThingHistoryRepository.findByUserId(user.getId());

		return ObjectInventoryRes.builder()
		                         .furnitureList(furnitureList)
		                         .homeApplianceList(homeApplianceList)
		                         .propList(propList)
		                         .floorList(floorList)
		                         .smartThingsList(smartThingsList)
		                         .unBoxThingList(unBoxThingHistoryList)
		                         .build();
	}
}
