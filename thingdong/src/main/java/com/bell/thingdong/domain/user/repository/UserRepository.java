package com.bell.thingdong.domain.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bell.thingdong.domain.user.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
	Optional<Users> findByEmail(String email);
}
