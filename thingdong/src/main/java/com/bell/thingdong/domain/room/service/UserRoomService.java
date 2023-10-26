package com.bell.thingdong.domain.room.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.room.dto.UserRoomRes;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.bell.thingdong.domain.room.repository.UserRoomRepository;
import com.bell.thingdong.domain.user.entity.User;
import com.bell.thingdong.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserRoomService {
	private final UserRepository userRepository;
	private final UserRoomRepository userRoomRepository;

	@Transactional
	public void createRoom(String email) {
		User user = userRepository.findByEmail(email).orElseThrow();

		UserRoom userRoom = UserRoom.builder().userId(user.getId()).roomColor("000000").build();

		userRoomRepository.save(userRoom);
	}

	public UserRoomRes loadRoom(String email) {
		User user = userRepository.findByEmail(email).orElseThrow();

		return new UserRoomRes();
	}
}
