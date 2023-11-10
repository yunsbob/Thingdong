package com.bell.thingdong.domain.room.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.room.dto.response.UserRoomRes;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.bell.thingdong.domain.room.repository.UserRoomRepository;
import com.bell.thingdong.domain.user.entity.User;
import com.bell.thingdong.domain.user.exception.UserNotFoundException;
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
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		UserRoom userRoom = UserRoom.builder().user(user).roomColor("000000").build();

		userRoomRepository.save(userRoom);
	}

	public UserRoomRes getRoom(String email, Long roomId) {
		User user;
		UserRoomRes userRoomRes;

		if (email != null) {
			user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
			userRoomRes = userRoomRepository.findRoomByUserIdOrRoomId(user.getId(), null);
		} else {
			userRoomRes = userRoomRepository.findRoomByUserIdOrRoomId(null, roomId);
			user = userRepository.findByEmail(userRoomRes.getUserId()).orElseThrow(UserNotFoundException::new);
		}

		return userRoomRes;
	}

	@Transactional
	public void updateRoomColor(String email, String roomColor) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		List<UserRoom> userRoomList = userRoomRepository.findAllByUserId(user.getId());

		for (UserRoom userRoom : userRoomList) {
			userRoom.setRoomColor(roomColor);
		}
	}
}
