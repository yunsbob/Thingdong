package com.bell.thingdong.domain.object.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.object.service.ObjectService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/objects")
@RequiredArgsConstructor
@Tag(name = "object", description = "오브제 관련 컨트롤러")
public class ObjectController {
	private final ObjectService objectService;
}
