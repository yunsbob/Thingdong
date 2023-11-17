package com.bell.thingdong.domain.generate3D.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.bell.thingdong.domain.generate3D.dto.ResourceReq;
import com.bell.thingdong.domain.generate3D.dto.ResourceRes;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class Generate3dService {
	@Value("${generator.stable-diffusion.url}")
	private String url;

	public ResourceRes generate3d(String sentence) {
		return WebClient.builder()
			.baseUrl(url)
			.build()
			.post()
			.bodyValue(new ResourceReq(sentence))
			.header("Content-Type", "application/json; charset=UTF-8")
			.retrieve()
			.bodyToMono(ResourceRes.class)
			.block();
	}
}
