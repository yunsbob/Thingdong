package com.bell.thingdong.domain.objet.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.objet.dto.ArrangeObjectPositionDto;
import com.bell.thingdong.domain.objet.dto.FindObjectDto;
import com.bell.thingdong.domain.objet.dto.ObjectCategory;
import com.bell.thingdong.domain.objet.dto.ObjectInventoryDto;
import com.bell.thingdong.domain.objet.dto.ObjectRoomInventoryDto;
import com.bell.thingdong.domain.objet.dto.SmartThingsRoomInventoryDto;
import com.bell.thingdong.domain.objet.dto.UnBoxThingHistoryDto;
import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.objet.dto.request.PresentReq;
import com.bell.thingdong.domain.objet.dto.request.UserObjectPositionReq;
import com.bell.thingdong.domain.objet.dto.response.ObjectInventoryRes;
import com.bell.thingdong.domain.objet.dto.response.ObjectRoomInventoryRes;
import com.bell.thingdong.domain.objet.entity.Objet;
import com.bell.thingdong.domain.objet.entity.UnBoxThingHistory;
import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.objet.exception.ObjectCategoryNotFoundException;
import com.bell.thingdong.domain.objet.exception.ObjectIsExpensiveException;
import com.bell.thingdong.domain.objet.exception.UserObjectNotFoundException;
import com.bell.thingdong.domain.objet.repository.ObjetRepository;
import com.bell.thingdong.domain.objet.repository.UnBoxThingHistoryRepository;
import com.bell.thingdong.domain.objet.repository.UserObjectRepository;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.bell.thingdong.domain.room.exception.RoomNotFoundException;
import com.bell.thingdong.domain.room.repository.UserRoomRepository;
import com.bell.thingdong.domain.smartthings.entity.SmartThings;
import com.bell.thingdong.domain.smartthings.repository.SmartThingsRepository;
import com.bell.thingdong.domain.thinghistory.service.ThingHistoryService;
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
	private final ObjetRepository objetRepository;
	private final UserObjectRepository userObjectRepository;
	private final UserRoomRepository userRoomRepository;
	private final UserRepository userRepository;
	private final SmartThingsRepository smartThingsRepository;
	private final ThingHistoryService thingHistoryService;

	@Transactional
	public void purchaseObject(Long userObjectId, String email) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
		UserObject userObject = userObjectRepository.findById(userObjectId).orElseThrow(UserObjectNotFoundException::new);

		if (user.getThingAmount() < userObject.getObjet().getObjectThing())
			throw new ObjectIsExpensiveException();

		user.setThingAmount(userObject.getObjet().getObjectThing() * -1);
		thingHistoryService.createThingHistory(user, "띵 구매", userObject.getObjet().getObjectThing() * -1);

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
		List<SmartThingsRoomInventoryDto> smartThingsList = new ArrayList<>();
		List<ObjectRoomInventoryDto> unBoxThingList = new ArrayList<>();

		List<FindObjectDto> objectRoomInventoryDtoList = userObjectRepository.findObjectByUserIdAndObjectStatusAndObjectCategory(user.getId(), UserObjectStatus.Shop, null);

		for (FindObjectDto findObjectDto : objectRoomInventoryDtoList) {
			if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.SmartThings)) {
				SmartThings smartThings = smartThingsRepository.findByUserObject(findObjectDto.getUserObject());

				SmartThingsRoomInventoryDto smartThingsRoomInventoryDto = SmartThingsRoomInventoryDto.builder()
				                                                                                     .userObjectId(findObjectDto.getUserObject().getUserObjectId())
				                                                                                     .objectImagePath(findObjectDto.getObjet().getObjectImagePath())
				                                                                                     .objectModelPath(findObjectDto.getObjet().getObjectModelPath())
				                                                                                     .name(findObjectDto.getObjet().getObjectName())
				                                                                                     .isWall(findObjectDto.getObjet().getIsWall().equals("Y") ? Boolean.TRUE :
					                                                                                     Boolean.FALSE)
				                                                                                     .objectStatus(findObjectDto.getUserObject()
				                                                                                                                .getUserObjectStatus()
				                                                                                                                .equals(UserObjectStatus.Room) ? "Y" : "N")
				                                                                                     .deviceId(smartThings.getDeviceId())
				                                                                                     .smartThingsStatus(
					                                                                                     smartThings.getStatus().equals("Y") ? Boolean.TRUE : Boolean.FALSE)
				                                                                                     .build();

				smartThingsList.add(smartThingsRoomInventoryDto);
			} else {
				ObjectRoomInventoryDto objectRoomInventoryDto = ObjectRoomInventoryDto.builder()
				                                                                      .userObjectId(findObjectDto.getUserObject().getUserObjectId())
				                                                                      .objectImagePath(findObjectDto.getObjet().getObjectImagePath())
				                                                                      .objectModelPath(findObjectDto.getObjet().getObjectModelPath())
				                                                                      .name(findObjectDto.getObjet().getObjectName())
				                                                                      .isWall(findObjectDto.getObjet().getIsWall().equals("Y") ? Boolean.TRUE : Boolean.FALSE)
				                                                                      .objectStatus(
					                                                                      findObjectDto.getUserObject().getUserObjectStatus().equals(UserObjectStatus.Room) ? "Y" :
						                                                                      "N")
				                                                                      .build();

				if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Furniture)) {
					furnitureList.add(objectRoomInventoryDto);
				} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.HomeAppliances)) {
					homeApplianceList.add(objectRoomInventoryDto);
				} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Prop)) {
					propList.add(objectRoomInventoryDto);
				} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.Floor)) {
					floorList.add(objectRoomInventoryDto);
				} else if (findObjectDto.getObjet().getObjectCategory().equals(ObjectCategory.UnBoxThing)) {
					unBoxThingList.add(objectRoomInventoryDto);
				} else {
					throw new ObjectCategoryNotFoundException();
				}
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
			                                                          .userObjectId(findObjectDto.getUserObject().getUserObjectId())
			                                                          .objectImagePath(findObjectDto.getObjet().getObjectImagePath())
			                                                          .objectThing(findObjectDto.getObjet().getObjectThing())
			                                                          .build();

			if (findObjectDto.getUserObject().getUserObjectStatus().equals(UserObjectStatus.Shop))
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

	@Transactional
	public void setUserObjectPosition(UserObjectPositionReq userObjectPositionReq) {
		UserRoom userRoom = userRoomRepository.findById(userObjectPositionReq.getRoomId()).orElseThrow(RoomNotFoundException::new);
		// 해당 방에 배치되어 있는 오브제들을 모두 불러옴
		List<UserObject> userObjectCheckList = userObjectRepository.findUserObjectByRoomId(userRoom.getRoomId());

		// 해당 방에 배치될 오브제들을 정렬함
		List<ArrangeObjectPositionDto> userObjectList = userObjectPositionReq.getObjectPositionList()
		                                                                     .stream()
		                                                                     .sorted(Comparator.comparing(ArrangeObjectPositionDto::getUserObjectId))
		                                                                     .toList();

		// idx == 현재 인덱스, last == 탐색이 끝나는 지점
		int idx = 0, last = userObjectCheckList.size();

		// 배치될 오브제들을 기준으로 반복문 돌림
		for (ArrangeObjectPositionDto arrangeObjectPositionDto : userObjectList) {
			while (idx < last && userObjectCheckList.get(idx).getUserObjectId() < arrangeObjectPositionDto.getUserObjectId()) {
				userObjectCheckList.get(idx).setUserObjectPosition(0.0, 0.0, 0.0, 0.0, null, UserObjectStatus.Inventory);
				idx++;
			}

			if (idx < last && userObjectCheckList.get(idx).getUserObjectId().equals(arrangeObjectPositionDto.getUserObjectId())) {
				userObjectCheckList.get(idx)
				                   .setUserObjectPosition(arrangeObjectPositionDto.getPosition().get(0), arrangeObjectPositionDto.getPosition().get(1),
					                   arrangeObjectPositionDto.getPosition().get(2), arrangeObjectPositionDto.getRotation().get(1), userRoom, UserObjectStatus.Room);
				idx++;
			} else {
				UserObject userObject = userObjectRepository.findById(arrangeObjectPositionDto.getUserObjectId()).orElseThrow(UserObjectNotFoundException::new);
				userObject.setUserObjectPosition(arrangeObjectPositionDto.getPosition().get(0), arrangeObjectPositionDto.getPosition().get(1),
					arrangeObjectPositionDto.getPosition().get(2), arrangeObjectPositionDto.getRotation().get(1), userRoom, UserObjectStatus.Room);
			}
		}

		while (idx < last) {
			userObjectCheckList.get(idx).setUserObjectPosition(0.0, 0.0, 0.0, 0.0, null, UserObjectStatus.Inventory);
			idx++;
		}
	}

	@Transactional
	public Long addUnBoxThing(String email, String name, String imgPath, String modelPath) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		Objet objet = Objet.builder()
		                   .objectImagePath(imgPath)
		                   .objectModelPath(modelPath)
		                   .objectName(name)
		                   .objectWidth(2.0)
		                   .objectHeight(2.0)
		                   .isWall("N")
		                   .objectCategory(ObjectCategory.UnBoxThing)
		                   .build();

		objetRepository.save(objet);

		UserObject userObject = UserObject.builder().objet(objet).user(user).userObjectStatus(UserObjectStatus.Inventory).build();
		Long userObjectId = userObjectRepository.save(userObject).getUserObjectId();

		UnBoxThingHistory unBoxThingHistory = UnBoxThingHistory.builder().objet(objet).user(user).objetName(name).build();
		unBoxThingHistoryRepository.save(unBoxThingHistory);

		thingHistoryService.createThingHistory(user, "언박띵 구매", -30L);
		user.setThingAmount(-30L);
		return userObjectId;
	}

	@Transactional
	public void presentUnBoxThing(PresentReq presentReq) {
		User user = userRepository.findByEmail(presentReq.getUserId()).orElseThrow(UserNotFoundException::new);

		UserObject userObject = userObjectRepository.findById(presentReq.getUserObjectId()).orElseThrow(UserObjectNotFoundException::new);

		userObject.setUser(user);
	}
}
