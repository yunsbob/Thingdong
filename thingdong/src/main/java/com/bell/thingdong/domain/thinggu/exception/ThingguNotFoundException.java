package com.bell.thingdong.domain.thinggu.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class ThingguNotFoundException extends BusinessException {
	public ThingguNotFoundException() {
		super("Thinggu Not Found Exception", ErrorCode.THINGGU_NOT_FOUND);
	}
}
