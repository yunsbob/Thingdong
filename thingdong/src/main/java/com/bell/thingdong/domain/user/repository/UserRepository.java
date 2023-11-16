package com.bell.thingdong.domain.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long>, CustomUserRepository {
	Optional<User> findByEmail(String email);

	boolean existsByEmail(String email);
}
