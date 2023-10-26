package com.bell.thingdong.domain.user.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class PasswordIsNotMatchedException extends BusinessException {
	public PasswordIsNotMatchedException() {
		super("Password Is Not Matched Exception", ErrorCode.PASSWORD_IS_NOT_MATCHED);
	}
}
