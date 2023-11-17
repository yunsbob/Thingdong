package com.bell.thingdong.domain.objet.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class UserObjectNotFoundException extends BusinessException {
	public UserObjectNotFoundException() {
		super("UserObject Not Found Exception", ErrorCode.USEROBJECT_NOT_FOUND);
	}
}
