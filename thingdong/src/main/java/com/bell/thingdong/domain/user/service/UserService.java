package com.bell.thingdong.domain.user.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bell.thingdong.domain.objet.dto.UserObjectStatus;
import com.bell.thingdong.domain.objet.entity.Objet;
import com.bell.thingdong.domain.objet.entity.UserObject;
import com.bell.thingdong.domain.objet.exception.ObjectIsExpensiveException;
import com.bell.thingdong.domain.objet.repository.ObjetRepository;
import com.bell.thingdong.domain.objet.repository.UserObjectRepository;
import com.bell.thingdong.domain.room.entity.RoomColor;
import com.bell.thingdong.domain.room.entity.UserRoom;
import com.bell.thingdong.domain.room.exception.RoomColorNotFoundException;
import com.bell.thingdong.domain.room.repository.RoomColorRepository;
import com.bell.thingdong.domain.room.repository.UserRoomRepository;
import com.bell.thingdong.domain.thinggu.entity.Thinggu;
import com.bell.thingdong.domain.thinggu.repository.ThingguRepository;
import com.bell.thingdong.domain.user.dto.UserRole;
import com.bell.thingdong.domain.user.dto.request.LoginReq;
import com.bell.thingdong.domain.user.dto.request.SignUpReq;
import com.bell.thingdong.domain.user.dto.response.LoginRes;
import com.bell.thingdong.domain.user.dto.response.UserInfoRes;
import com.bell.thingdong.domain.user.dto.response.UserSearchRes;
import com.bell.thingdong.domain.user.entity.User;
import com.bell.thingdong.domain.user.exception.EmailDuplicationException;
import com.bell.thingdong.domain.user.exception.PasswordIsNotMatchedException;
import com.bell.thingdong.domain.user.exception.UserNotFoundException;
import com.bell.thingdong.domain.user.repository.UserRepository;
import com.bell.thingdong.global.config.jwt.JwtTokenProvider;
import com.bell.thingdong.global.config.jwt.TokenInfo;
import com.bell.thingdong.global.redis.RedisRepository;
import com.bell.thingdong.global.util.CookieUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {
	private final UserObjectRepository userObjectRepository;
	private static final String REFRESH_TOKEN = "refresh_token";
	private static final String[] nickHead = {"강한", "큰", "작은", "용감한", "명랑한", "빠른", "멋진", "예쁜", "행운의", "똑똑한"};
	private static final String[] nickBody = {"사자", "호랑이", "기린", "팬더", "원숭이", "코알라", "팽귄", "호랭이", "토끼", "고릴라"};
	private final RedisRepository redisRepository;
	private final UserRepository userRepository;
	private final UserRoomRepository userRoomRepository;
	private final ObjetRepository objectRepository;
	private final ThingguRepository thingguRepository;
	private final RoomColorRepository roomColorRepository;
	private final PasswordEncoder passwordEncoder;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;

	public void logout(HttpServletRequest request, HttpServletResponse response, String email) {
		// redis 토큰 삭제
		redisRepository.deleteValues("RT:" + email);
		// 쿠키 삭제
		CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
	}

	public LoginRes login(LoginReq loginReq, HttpServletRequest request, HttpServletResponse response) {
		//비밀번호 검증
		User user = userRepository.findByEmail(loginReq.getUserId()).orElseThrow(UserNotFoundException::new);
		if (!passwordEncoder.matches(loginReq.getPassword(), user.getPassword())) {
			throw new PasswordIsNotMatchedException();
		}
		// Authentication 발급
		UsernamePasswordAuthenticationToken authenticationToken = loginReq.toAuthentication();
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		TokenInfo tokenInfo = jwtTokenProvider.createToken(authentication);
		// 쿠키 값 갱신
		CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
		CookieUtil.addCookie(response, REFRESH_TOKEN, tokenInfo.getRefreshToken(), JwtTokenProvider.getRefreshTokenExpireTimeCookie());
		// RT 발급
		redisRepository.setValues("RT:" + authentication.getName(), tokenInfo.getRefreshToken(), tokenInfo.getExpireTime());
		return LoginRes.builder()
		               .accessToken(tokenInfo.getAccessToken())
		               .PAToken(user.getPAToken())
		               .userId(user.getEmail())
		               .nickName(user.getNickname())
		               .thingAmount(user.getThingAmount())
		               .build();
	}

	@Transactional
	public void signUp(SignUpReq signUpReq) {
		checkDuplicatedEmail(signUpReq.getUserId());

		String nickname = signUpReq.getNickname();
		if (nickname == null || nickname.isEmpty()) {
			nickname = generateRandomNickName();
		}

		User build = User.builder()
		                 .email(signUpReq.getUserId())
		                 .password(passwordEncoder.encode(signUpReq.getPassword()))
		                 .nickname(nickname)
		                 .roles(Collections.singletonList(UserRole.ROLE_USER.name()))
		                 .build();

		userRepository.save(build);

		RoomColor roomColor = roomColorRepository.findById("yellow").orElseThrow(RoomColorNotFoundException::new);
		UserRoom userRoom = UserRoom.builder().user(build).roomColor(roomColor).build();

		List<Objet> objetList = objectRepository.findAllObjectNotUnBoxThingAndSmartThings();
		for (Objet objet : objetList) {
			UserObject userObject = UserObject.builder().userObjectStatus(UserObjectStatus.Shop).objet(objet).user(build).build();
			userObjectRepository.save(userObject);
		}

		userRoomRepository.save(userRoom);
	}

	public UserInfoRes readUserInfo(String email) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
		return UserInfoRes.builder().userId(user.getEmail()).nickName(user.getNickname()).PAToken(user.getPAToken()).thingAmount(user.getThingAmount()).build();
	}

	private String generateRandomNickName() {
		Random random = new Random();
		return nickHead[random.nextInt(nickHead.length)] + nickBody[random.nextInt(nickBody.length)];
	}

	public void checkDuplicatedEmail(String email) {
		if (userRepository.existsByEmail(email)) {
			throw new EmailDuplicationException();
		}
	}

	public List<UserSearchRes> getUserSearchInfo(String email, String searchEmail) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		List<User> findUsers = userRepository.findUsersByEmail(searchEmail);

		List<UserSearchRes> userSearchResList = new ArrayList<>();
		for (User u : findUsers) {
			if (u.getEmail().equals(email))
				continue;

			UserSearchRes userSearchRes = UserSearchRes.builder().userId(u.getEmail()).nickname(u.getNickname()).build();

			List<Thinggu> thinggu = thingguRepository.findThingguByUserIdOrThingguId(user.getId(), u.getId());
			if (thinggu.isEmpty()) {
				List<Thinggu> thingguRequest = thingguRepository.findThingguByUserIdOrThingguId(u.getId(), user.getId());
				if (thingguRequest.isEmpty()) {
					userSearchRes.setThingguStatus("N");
				} else {
					userSearchRes.setThingguStatus("Y");
				}
			} else {
				if (thinggu.get(0).getThingguStatus().equals("Y")) {
					userSearchRes.setThingguStatus("Y");
				} else {
					userSearchRes.setThingguStatus("N");
				}
			}

			userSearchResList.add(userSearchRes);
		}

		return userSearchResList;
	}

	public void userThingCheck(String email) {
		User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);

		if (user.getThingAmount() < 30)
			throw new ObjectIsExpensiveException();
	}
}
