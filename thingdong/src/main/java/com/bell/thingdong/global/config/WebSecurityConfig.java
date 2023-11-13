package com.bell.thingdong.global.config;

import java.util.stream.Stream;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.bell.thingdong.global.config.jwt.JwtAuthenticationFilter;
import com.bell.thingdong.global.config.jwt.JwtTokenProvider;
import com.bell.thingdong.global.config.jwt.RestAuthenticationEntryPoint;
import com.bell.thingdong.global.config.jwt.TokenAccessDeniedHandler;
import com.bell.thingdong.global.redis.RedisRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
	private static final String[] WHITE_LIST = {"/swagger-ui/**", "/v3/**", "/api/users/login",
		"/api/users/checkEmailDuplication", "/api/users/signUp", "/api/test/**"};
	private final JwtTokenProvider jwtTokenProvider;
	private final RedisRepository redisRepository;
	private final TokenAccessDeniedHandler tokenAccessDeniedHandler;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		return http.csrf(AbstractHttpConfigurer::disable)
			.httpBasic(AbstractHttpConfigurer::disable)
			.formLogin(AbstractHttpConfigurer::disable)
			.cors(c -> c.configurationSource(corsConfigurationSource()))
			.sessionManagement(c -> c.sessionCreationPolicy((SessionCreationPolicy.STATELESS)))
			.authorizeHttpRequests(auth -> auth.requestMatchers(
					Stream.of(WHITE_LIST).map(AntPathRequestMatcher::antMatcher).toArray(AntPathRequestMatcher[]::new))
				.permitAll()
				.requestMatchers(AntPathRequestMatcher.antMatcher("/user/**"))
				.hasAnyRole("USER")
				.requestMatchers(AntPathRequestMatcher.antMatcher("/admin/**"))
				.hasAnyRole("ADMIN")
				.anyRequest()
				.authenticated())
			.exceptionHandling(c -> c.authenticationEntryPoint(new RestAuthenticationEntryPoint())
				.accessDeniedHandler(tokenAccessDeniedHandler))
			.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, redisRepository),
				UsernamePasswordAuthenticationFilter.class).build();
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration corsConfiguration = new CorsConfiguration();

		corsConfiguration.addAllowedOriginPattern("*");
		corsConfiguration.addAllowedHeader("*");
		corsConfiguration.addAllowedMethod("*");
		corsConfiguration.setAllowCredentials(true);
		source.registerCorsConfiguration("/**", corsConfiguration);
		return source;
	}
}
