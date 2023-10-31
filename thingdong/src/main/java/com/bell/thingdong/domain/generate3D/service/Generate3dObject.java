package com.bell.thingdong.domain.generate3D.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class Generate3dObject {
	@Value("${translator.stable-diffusion.url}")
	private String url;

}
