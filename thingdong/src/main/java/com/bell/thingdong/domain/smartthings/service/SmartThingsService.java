package com.bell.thingdong.domain.smartthings.service;

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
		SmartThings smartThings = smartThingsRepository.findByDeviceId(smartThingsStatusReq.getDeviceId());

		if (smartThingsStatusReq.getStatus())
			smartThings.setStatus("Y");
		else
			smartThings.setStatus("N");
	}
}
