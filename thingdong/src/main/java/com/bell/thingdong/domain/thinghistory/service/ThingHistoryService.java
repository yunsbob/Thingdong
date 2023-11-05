package com.bell.thingdong.domain.thinghistory.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.thinghistory.dto.FindThingHistoryDto;
import com.bell.thingdong.domain.thinghistory.dto.response.ThingHistoryRes;
import com.bell.thingdong.domain.thinghistory.entity.ThingHistory;
import com.bell.thingdong.domain.thinghistory.repository.ThingHistoryRepository;
import com.bell.thingdong.domain.user.entity.User;
import com.bell.thingdong.domain.user.exception.UserNotFoundException;
import com.bell.thingdong.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ThingHistoryService {
	private final ThingHistoryRepository thingHistoryRepository;
	private final UserRepository userRepository;

	public List<ThingHistoryRes> getThingHistory(String email) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		List<FindThingHistoryDto> thingHistoryDtoList = thingHistoryRepository.findByUserId(user.getId());

		List<ThingHistoryRes> thingHistoryResList = new ArrayList<>();
		for (FindThingHistoryDto findThingHistoryDto : thingHistoryDtoList) {
			ThingHistoryRes thingHistoryRes = ThingHistoryRes.builder()
			                                                 .changeThing(Math.abs(findThingHistoryDto.getChangeThing()))
			                                                 .thingContent(findThingHistoryDto.getThingContent())
			                                                 .isPlus(findThingHistoryDto.getChangeThing() > 0 ? "Y" : "N")
			                                                 .thingDay(findThingHistoryDto.getThingDay().toLocalDate())
			                                                 .build();
			thingHistoryResList.add(thingHistoryRes);
		}

		return thingHistoryResList;
	}

	@Transactional
	public void createThingHistory(User user, String content, Long changeThing) {
		ThingHistory thingHistory = ThingHistory.builder().user(user).thingContent(content).changeThing(changeThing).build();

		thingHistoryRepository.save(thingHistory);
	}
}
