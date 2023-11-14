package com.bell.thingdong.domain.room.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class RoomColorNotFoundException extends BusinessException {
	public RoomColorNotFoundException() {
		super("Room Color Not Found Exception", ErrorCode.ROOM_COLOR_NOT_FOUND);
	}
}
