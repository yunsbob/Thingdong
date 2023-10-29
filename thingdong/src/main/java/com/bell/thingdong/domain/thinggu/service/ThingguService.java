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
import com.bell.thingdong.domain.user.exception.UserNotFoundException;
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
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		List<Thinggu> thinggus = thingguRepository.findThingguByUserIdOrThingguId(user.getId(), null);

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
	public void requestThinggu(String email, Long thingguId) {
		User userMe = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
		User userThinggu = userRepository.findById(thingguId).orElseThrow();
		Thinggu thinggu = Thinggu.builder().thingguId(userMe).userId(userThinggu).thingguStatus("N").build();

		thingguRepository.save(thinggu);
	}

	@Transactional
	public void acceptThinggu(String email, Long thingguId) {
		User userMe = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		Thinggu userThinggu = thingguRepository.findThingguByUserIdOrThingguId(userMe.getId(), thingguId).get(0);

		userThinggu.setThingguStatus("Y");

		Thinggu thinggu = Thinggu.builder().thingguId(userMe).userId(userThinggu.getThingguId()).thingguStatus("Y").build();

		thingguRepository.save(thinggu);
	}

	@Transactional
	public void deleteThinggu(String email, Long thingguId) {
		User userMe = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		List<Thinggu> thingguMe = thingguRepository.findThingguByUserIdOrThingguId(userMe.getId(), thingguId);

		if (thingguMe.size() > 0) {
			// 친구 목록인 경우 상대의 띵구 목록에서도 나를 삭제
			if (thingguMe.get(0).getThingguStatus().equals("Y")) {
				Thinggu thinggu = thingguRepository.findThingguByUserIdOrThingguId(thingguId, userMe.getId()).get(0);
				thingguRepository.delete(thinggu);
			}

			// 내 목록에 있는 띵구 삭제
			thingguRepository.delete(thingguMe.get(0));
		}
	}
}
