package com.bell.thingdong.domain.room.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class RoomNotFoundException extends BusinessException {
	public RoomNotFoundException() {
		super("Room Not Found Exception", ErrorCode.ROOM_NOT_FOUND);
	}
}
