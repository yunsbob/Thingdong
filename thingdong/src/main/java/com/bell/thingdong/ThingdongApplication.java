package com.bell.thingdong;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;

@EnableJpaAuditing
@SpringBootApplication
@OpenAPIDefinition(servers = {@Server(url = "${server.host}", description = "EC2 Server URL"),
	@Server(url = "http://localhost:8080", description = "Local Server URL")
})
public class ThingdongApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThingdongApplication.class, args);
	}

}
