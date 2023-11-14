package com.bell.thingdong.domain.generate3D.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.generate3D.dto.ResourceRes;
import com.bell.thingdong.domain.generate3D.service.Generate3dService;
import com.bell.thingdong.domain.generate3D.service.TranslationService;
import com.bell.thingdong.domain.objet.service.ObjetService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/generate3d")
@RequiredArgsConstructor
@Tag(name = "Generate3d API ", description = "3d resource 생성 api")
public class GenerateController {

	private final TranslationService translationService;
	private final Generate3dService generate3dService;
	private final ObjetService objetService;

	@GetMapping("/unBoxThing")
	@Operation(summary = "언박싱 결과 fetch API", description = "문장을 넣으면 번역하고 해당 3d 객체를 만들어요!")
	public ResponseEntity<ResourceRes> getResource(Principal principal,
		@Parameter(description = "3d 오브제를 생성할 문구를 입력한다.", required = true, example = "바나나 모양을 한 비행기") @RequestParam("sentence") String sentence) {
		log.info("unBoxThing");
		String enSentence = translationService.translate(sentence);
		ResourceRes resourceRes = generate3dService.generate3d(enSentence);

		String email = principal.getName();
		objetService.addUnBoxThing(email, sentence, resourceRes.getPngPath(), resourceRes.getGlbPath());
		return ResponseEntity.ok(resourceRes);
	}
}
