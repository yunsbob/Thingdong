package com.bell.thingdong.domain.example.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.example.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findUserByEmail(String email);

	Optional<User> findByEmail(String email);
}
