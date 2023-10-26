package com.bell.thingdong.domain.room.service;

import java.util.List;

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

		UserRoomRes userRoomRes = userRoomRepository.findRoomByUserIdOrRoomId(user.getId(), null);

		List<Long> rooms = userRoomRepository.findRoomIdByUserId(user.getId());

		for (int i = 0; i < rooms.size(); i++) {
			if (rooms.get(i) == userRoomRes.getRoomId()) {
				if (i == 0) {
					userRoomRes.setPrevRoom(0L);
				} else {
					userRoomRes.setPrevRoom(rooms.get(i - 1));
				}
				if (i == rooms.size() - 1) {
					userRoomRes.setNextRoom(0L);
				} else {
					userRoomRes.setNextRoom(rooms.get(i + 1));
				}
				break;
			}
		}

		return userRoomRes;
	}
}
