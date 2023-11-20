package com.bell.thingdong.domain.smartthings.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.objet.entity.Objet;
import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.objet.exception.ObjetNotFoundException;
import com.bell.thingdong.domain.objet.repository.ObjetRepository;
import com.bell.thingdong.domain.objet.repository.UserObjectRepository;
import com.bell.thingdong.domain.smartthings.dto.req.AddSmartThingsReq;
import com.bell.thingdong.domain.smartthings.dto.req.SmartThingsStatusReq;
import com.bell.thingdong.domain.smartthings.entity.SmartThings;
import com.bell.thingdong.domain.smartthings.repository.SmartThingsRepository;
import com.bell.thingdong.domain.user.entity.User;
import com.bell.thingdong.domain.user.exception.UserNotFoundException;
import com.bell.thingdong.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SmartThingsService {
	private final SmartThingsRepository smartThingsRepository;
	private final UserObjectRepository userObjectRepository;
	private final ObjetRepository objetRepository;
	private final UserRepository userRepository;

	@Transactional
	public void updateStatus(SmartThingsStatusReq smartThingsStatusReq) {
		List<SmartThings> smartThingsList = smartThingsRepository.findAllByDeviceId(smartThingsStatusReq.getDeviceId());

		String status;
		if (smartThingsStatusReq.getSmartThingsStatus())
			status = "Y";
		else
			status = "N";

		for (SmartThings smartThings : smartThingsList) {
			smartThings.setStatus(status);
		}
	}

	@Transactional
	public void addSmartThings(String email, List<AddSmartThingsReq> smartThingsReqList) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		for (AddSmartThingsReq smartThingsReq : smartThingsReqList) {
			if (smartThingsReq.getCategory().equals("Switch") || smartThingsReq.getCategory().equals("Light") || smartThingsReq.getCategory().equals("Blind")) {
				if (smartThingsRepository.ExistByDeviceIdAndUserId(smartThingsReq.getDeviceId(), user.getId()))
					continue;

				if (smartThingsReq.getCategory().equals("Blind")) {
					Objet objet = objetRepository.findById(68L).orElseThrow(ObjetNotFoundException::new);
					UserObject userObject = UserObject.builder()
					                                  .user(user)
					                                  .objet(objet)
					                                  .x(0.0)
					                                  .y(0.0)
					                                  .z(0.0)
					                                  .userObjectStatus(UserObjectStatus.Inventory)
					                                  .rotationX(0.0)
					                                  .rotationY(0.0)
					                                  .rotationZ(0.0)
					                                  .build();

					userObjectRepository.save(userObject);

					SmartThings smartThings = SmartThings.builder()
					                                     .userObject(userObject)
					                                     .activationPath("https://thingdong.com/resources/glb/things/curtain-open1.glb")
					                                     .deviceId(smartThingsReq.getDeviceId())
					                                     .status(smartThingsReq.getStatus().equals("OPEN") ? "Y" : "N")
					                                     .name(smartThingsReq.getLabel())
					                                     .build();

					smartThingsRepository.save(smartThings);
				} else if (smartThingsReq.getCategory().equals("Switch")) {
					Objet objet = objetRepository.findById(69L).orElseThrow(ObjetNotFoundException::new);
					UserObject userObject = UserObject.builder()
					                                  .user(user)
					                                  .objet(objet)
					                                  .x(0.0)
					                                  .y(0.0)
					                                  .z(0.0)
					                                  .userObjectStatus(UserObjectStatus.Inventory)
					                                  .rotationX(0.0)
					                                  .rotationY(0.0)
					                                  .rotationZ(0.0)
					                                  .build();

					userObjectRepository.save(userObject);

					SmartThings smartThings = SmartThings.builder()
					                                     .userObject(userObject)
					                                     .activationPath("https://thingdong.com/resources/glb/things/lamp1.glb")
					                                     .deviceId(smartThingsReq.getDeviceId())
					                                     .status(smartThingsReq.getStatus().equals("ON") ? "Y" : "N")
					                                     .name(smartThingsReq.getLabel())
					                                     .build();

					smartThingsRepository.save(smartThings);
				} else {
					Objet objet = objetRepository.findById(161L).orElseThrow(ObjetNotFoundException::new);
					UserObject userObject = UserObject.builder()
					                                  .user(user)
					                                  .objet(objet)
					                                  .x(0.0)
					                                  .y(0.0)
					                                  .z(0.0)
					                                  .userObjectStatus(UserObjectStatus.Inventory)
					                                  .rotationX(0.0)
					                                  .rotationY(0.0)
					                                  .rotationZ(0.0)
					                                  .build();

					userObjectRepository.save(userObject);

					SmartThings smartThings = SmartThings.builder()
					                                     .userObject(userObject)
					                                     .activationPath("https://thingdong.com/resources/glb/things/switch-on1.glb")
					                                     .deviceId(smartThingsReq.getDeviceId())
					                                     .status(smartThingsReq.getStatus().equals("ON") ? "Y" : "N")
					                                     .name(smartThingsReq.getLabel())
					                                     .build();

					smartThingsRepository.save(smartThings);
				}
			}
		}
	}
}
