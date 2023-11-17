package com.bell.thingdong.domain.room.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.room.dto.request.ColorReq;
import com.bell.thingdong.domain.room.dto.request.DarkModeReq;
import com.bell.thingdong.domain.room.dto.response.UserRoomRes;
import com.bell.thingdong.domain.room.entity.RoomColor;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.bell.thingdong.domain.room.exception.RoomColorNotFoundException;
import com.bell.thingdong.domain.room.exception.RoomNotFoundException;
import com.bell.thingdong.domain.room.repository.RoomColorRepository;
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
	private final RoomColorRepository roomColorRepository;

	@Transactional
	public void createRoom(String email) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		RoomColor roomColor = roomColorRepository.findById("yellow").orElseThrow(RoomColorNotFoundException::new);
		UserRoom userRoom = UserRoom.builder().user(user).roomColor(roomColor).build();

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
	public void updateRoomColor(ColorReq colorReq) {
		UserRoom userRoom = userRoomRepository.findById(colorReq.getRoomId()).orElseThrow(RoomNotFoundException::new);
		RoomColor findRoomColor = roomColorRepository.findById(colorReq.getRoomColor()).orElseThrow(RoomColorNotFoundException::new);

		userRoom.setRoomColor(findRoomColor);
	}

	@Transactional
	public void updateDarkMode(DarkModeReq darkModeReq) {
		UserRoom userRoom = userRoomRepository.findById(darkModeReq.getRoomId()).orElseThrow(RoomNotFoundException::new);
		userRoom.setDarkMode(darkModeReq.getDarkMode() ? "Y" : "N");
	}
}
