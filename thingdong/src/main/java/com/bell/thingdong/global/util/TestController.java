package com.bell.thingdong.global.util;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.translate.service.TranslateService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/test")
@RequiredArgsConstructor
@Tag(name = "테스트 용 controller", description = "테스트용")
public class TestController {
	private final TranslateService translateService;

	@GetMapping("/translate")
	public String test(@RequestParam("message") String message){
		return translateService.PaPago(message);
	}
}
