package com.bell.thingdong.domain.thinggu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.thinggu.dto.ThingguDto;
import com.bell.thingdong.domain.thinggu.dto.response.ThingguRes;
import com.bell.thingdong.domain.thinggu.entity.Thinggu;
import com.bell.thingdong.domain.thinggu.repository.ThingguRepository;
import com.bell.thingdong.domain.user.entity.User;
import com.bell.thingdong.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ThingguService {
	private final UserRepository userRepository;
	private final ThingguRepository thingguRepository;

	public ThingguRes getThinggus(String email) {
		User user = userRepository.findByEmail(email).orElseThrow();

		List<Thinggu> thinggus = thingguRepository.findThingguByUserId(user.getId());

		List<ThingguDto> thingguList = new ArrayList<>(), thingguAlarmList = new ArrayList<>();
		for (Thinggu thinggu : thinggus) {
			ThingguDto thingguDto = ThingguDto.builder()
			                                  .userId(thinggu.getThingguId().getId())
			                                  .nickname(thinggu.getThingguId().getNickname())
			                                  .email(thinggu.getThingguId().getEmail())
			                                  .build();

			if (thinggu.getThingguStatus().equals("Y")) {
				thingguList.add(thingguDto);
			} else {
				thingguAlarmList.add(thingguDto);
			}
		}

		ThingguRes thingguRes = new ThingguRes();
		thingguRes.setThingguList(thingguList);
		thingguRes.setThingguAlarmList(thingguAlarmList);

		return thingguRes;
	}

	@Transactional
	public void addThinggu(String email, Long thingguId) {
		User userMe = userRepository.findByEmail(email).orElseThrow();
		User userThinggu = userRepository.findById(thingguId).orElseThrow();
		Thinggu thinggu = Thinggu.builder().thingguId(userMe).userId(userThinggu).thingguStatus("N").build();

		thingguRepository.save(thinggu);
	}
}
