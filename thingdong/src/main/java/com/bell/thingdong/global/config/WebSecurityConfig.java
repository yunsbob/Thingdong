package com.bell.thingdong.global.config;

import java.util.stream.Stream;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.bell.thingdong.domain.example.user.repository.UserRepository;
import com.bell.thingdong.global.config.jwt.JwtAuthenticationFilter;
import com.bell.thingdong.global.config.jwt.JwtTokenProvider;
import com.bell.thingdong.global.config.jwt.exception.RestAuthenticationEntryPoint;
import com.bell.thingdong.global.handler.TokenAccessDeniedHandler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@Slf4j
public class WebSecurityConfig {
	private static final String[] WHITE_LIST = {"/swagger-ui/**", "/v3/**"};
	private final JwtTokenProvider jwtTokenProvider;
	private final RedisTemplate<String, String> redisTemplate;
	private final UserRepository userRepository;
	private final TokenAccessDeniedHandler tokenAccessDeniedHandler;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.csrf(AbstractHttpConfigurer::disable)
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
			// jwt exception filter 추가 ㄱㄱ

			.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, redisTemplate),
				UsernamePasswordAuthenticationFilter.class);

		return httpSecurity.build();
	}

	// 암호화에 필요한 PasswordEncoder Bean 등록
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	//CORS 허용 적용
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
