package com.bell.thingdong.domain.objet.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class ObjectIsExpensiveException extends BusinessException {
	public ObjectIsExpensiveException() {
		super("Object Is Expensive", ErrorCode.OBJECT_IS_EXPENSIVE);
	}
}
