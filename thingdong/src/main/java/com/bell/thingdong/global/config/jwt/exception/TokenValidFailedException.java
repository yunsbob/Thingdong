package com.bell.thingdong.global.config.jwt.exception;

public class TokenValidFailedException extends RuntimeException {

	public TokenValidFailedException() {
		super("Token is not valid");
	}

	private TokenValidFailedException(String message) {
		super(message);
	}
}
