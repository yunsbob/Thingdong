package com.bell.thingdong.domain.guestbook.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class GuestBookUnauthorizedException extends BusinessException {
	public GuestBookUnauthorizedException() {
		super("GuestBook Unauthorized Exception", ErrorCode.GUESTBOOK_UNAUTHORIZED);
	}
}
