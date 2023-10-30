package com.bell.thingdong.domain.thinggu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.thinggu.dto.ThingguDto;
import com.bell.thingdong.domain.thinggu.dto.response.ThingguRes;
import com.bell.thingdong.domain.thinggu.entity.Thinggu;
import com.bell.thingdong.domain.thinggu.exception.ThingguNotFoundException;
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
			ThingguDto thingguDto = ThingguDto.builder().nickname(thinggu.getThingguId().getNickname()).thingguId(thinggu.getThingguId().getEmail()).build();

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
	public void requestThinggu(String email, String thingguEmail) {
		User userMe = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
		User userThinggu = userRepository.findByEmail(thingguEmail).orElseThrow(UserNotFoundException::new);

		List<Thinggu> findThinggu = thingguRepository.findThingguByUserIdOrThingguId(userMe.getId(), userThinggu.getId());

		if (!findThinggu.isEmpty()) {
			findThinggu.get(0).setThingguStatus("Y");
			Thinggu thinggu = Thinggu.builder().thingguId(userMe).userId(userThinggu).thingguStatus("Y").build();
			thingguRepository.save(thinggu);
		} else {
			Thinggu thinggu = Thinggu.builder().thingguId(userMe).userId(userThinggu).thingguStatus("N").build();
			thingguRepository.save(thinggu);
		}
	}

	@Transactional
	public void acceptThinggu(String email, String thingguEmail) {
		User userMe = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
		User userThinggu = userRepository.findByEmail(thingguEmail).orElseThrow(UserNotFoundException::new);

		List<Thinggu> findThinggu = thingguRepository.findThingguByUserIdOrThingguId(userMe.getId(), userThinggu.getId());

		if (findThinggu.isEmpty())
			throw new ThingguNotFoundException();

		findThinggu.get(0).setThingguStatus("Y");

		Thinggu thinggu = Thinggu.builder().thingguId(userMe).userId(userThinggu).thingguStatus("Y").build();

		thingguRepository.save(thinggu);
	}

	@Transactional
	public void deleteThinggu(String email, String thingguEmail) {
		User userMe = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
		User userThinggu = userRepository.findByEmail(thingguEmail).orElseThrow(UserNotFoundException::new);

		List<Thinggu> thingguMe = thingguRepository.findThingguByUserIdOrThingguId(userMe.getId(), userThinggu.getId());

		if (thingguMe.isEmpty()) {
			List<Thinggu> thingguRequest = thingguRepository.findThingguByUserIdOrThingguId(userThinggu.getId(), userMe.getId());

			// 내가 띵구 요청을 한 경우에 요청 삭제
			if (thingguRequest.isEmpty())
				throw new ThingguNotFoundException();
			else
				thingguRepository.delete(thingguRequest.get(0));
		} else {
			// 친구 목록인 경우 상대의 띵구 목록에서도 나를 삭제
			if (thingguMe.get(0).getThingguStatus().equals("Y")) {
				List<Thinggu> thinggu = thingguRepository.findThingguByUserIdOrThingguId(userThinggu.getId(), userMe.getId());

				if (thinggu.isEmpty())
					throw new ThingguNotFoundException();

				thingguRepository.delete(thinggu.get(0));
			}

			// 내 목록에 있는 띵구 삭제
			thingguRepository.delete(thingguMe.get(0));
		}
	}
}
