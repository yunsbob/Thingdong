package com.bell.thingdong.domain.user.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class EmailDuplicationException extends BusinessException {
	public EmailDuplicationException() {
		super("Email Is Duplicated", ErrorCode.EMAIL_DUPLICATION);
	}
}
