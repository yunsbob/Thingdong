package com.bell.thingdong.domain.user.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class ProviderIsNotMatchedException extends BusinessException {
	public ProviderIsNotMatchedException(String message) {
		super(message, ErrorCode.PROVIDER_IS_NOT_MATCHED);
	}
}
