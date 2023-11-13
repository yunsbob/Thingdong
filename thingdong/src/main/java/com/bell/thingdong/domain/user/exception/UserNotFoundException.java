package com.bell.thingdong.domain.user.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class UserNotFoundException extends BusinessException {

	public UserNotFoundException() {
		super("User Not Found Exception", ErrorCode.USER_NOT_FOUND);
	}
}
