package com.bell.thingdong.domain.translate.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PapagoRes {
	@JsonProperty("message")
	private Message message;

	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Message {
		@JsonProperty("@type")
		private String type;

		@JsonProperty("@service")
		private String service;

		@JsonProperty("@version")
		private String version;

		@JsonProperty("result")
		private Result result;
	}

	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	public static class Result {
		@JsonProperty("srcLangType")
		private String srcLangType;

		@JsonProperty("tarLangType")
		private String tarLangType;

		@JsonProperty("translatedText")
		private String translatedText;

		@JsonProperty("engineType")
		private String engineType;
	}
}
