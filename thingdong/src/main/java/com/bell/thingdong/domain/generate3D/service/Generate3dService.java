package com.bell.thingdong.domain.generate3D.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class Generate3dService {
	@Value("${generator.stable-diffusion.url}")
	private String url;

	@Value("${generator.stable-diffusion.port}")
	private String port;

	public String generate3d() {
		return WebClient.builder()
			.baseUrl(url)
			.build()
			.post()
			.uri(uriBuilder -> uriBuilder
				.port(port)
				.build())
			.header("Content-Type", "application/json; charset=UTF-8")
			.retrieve()
			.bodyToMono(String.class)
			.block();
	}
}
