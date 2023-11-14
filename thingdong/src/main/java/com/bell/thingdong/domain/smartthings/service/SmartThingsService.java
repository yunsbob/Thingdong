package com.bell.thingdong.domain.smartthings.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.smartthings.dto.req.SmartThingsStatusReq;
import com.bell.thingdong.domain.smartthings.entity.SmartThings;
import com.bell.thingdong.domain.smartthings.repository.SmartThingsRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SmartThingsService {
	private final SmartThingsRepository smartThingsRepository;

	@Transactional
	public void updateStatus(SmartThingsStatusReq smartThingsStatusReq) {
		List<SmartThings> smartThingsList = smartThingsRepository.findAllByDeviceId(smartThingsStatusReq.getDeviceId());

		String status;
		if (smartThingsStatusReq.getStatus())
			status = "Y";
		else
			status = "N";

		for (SmartThings smartThings : smartThingsList) {
			smartThings.setStatus(status);
		}
	}
}
