package com.bell.thingdong.global.util;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.generate3D.service.Generate3dService;
import com.bell.thingdong.domain.generate3D.service.TranslationService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/test")
@RequiredArgsConstructor
@Tag(name = "테스트 용 controller", description = "테스트용")
public class TestController {
	private final TranslationService translationService;
	private final Generate3dService generate3dService;

	// @GetMapping("/translate")
	// public String test(@RequestParam("message") String message) {
	// 	return translationService.translateByPapago(message);
	// }

	// 번역에 대한 내용 테스트
	@GetMapping("/translate2")
	public String test2(@RequestParam("message") String message) {
		return translationService.translate(message);
	}

	// 외부 fastAPI 요청에 대한 응답 테스트
	@GetMapping("/fastTest")
	public String test3() {
		return generate3dService.generate3d();
	}
}
