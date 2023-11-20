package com.bell.thingdong.domain.objet.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class ObjetNotFoundException extends BusinessException {
	public ObjetNotFoundException() {
		super("Objet Not Found Exception", ErrorCode.OBJET_NOT_FOUND);
	}
}
