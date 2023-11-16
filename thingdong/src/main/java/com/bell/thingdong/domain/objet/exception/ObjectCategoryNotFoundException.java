package com.bell.thingdong.domain.objet.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class ObjectCategoryNotFoundException extends BusinessException {
	public ObjectCategoryNotFoundException() {
		super("ObjectCategory Not Found Exception", ErrorCode.OBJECTCATEGORY_NOT_FOUND);
	}
}
