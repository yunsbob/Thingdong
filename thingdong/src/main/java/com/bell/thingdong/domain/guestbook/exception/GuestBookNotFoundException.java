package com.bell.thingdong.domain.guestbook.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class GuestBookNotFoundException extends BusinessException {
	public GuestBookNotFoundException() {
		super("GuestBook Not Found Exception", ErrorCode.GUESTBOOK_NOT_FOUND);
	}
}
