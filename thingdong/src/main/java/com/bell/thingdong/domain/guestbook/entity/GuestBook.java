package com.bell.thingdong.domain.guestbook.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Entity
@Table(name = "guest_books", indexes = {@Index(name = "idx_guestbook_user_email", columnList = "user_email")})
public class GuestBook {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "guest_book_id", nullable = false)
	private Long guestBookId;

	@Column(name = "user_email", nullable = false)
	private String userEmail;

	@Column(name = "writer_email", nullable = false)
	private String writerEmail;

	@Column(name = "content", nullable = false)
	private String content;

	@CreatedDate
	@Column(name = "write_day", updatable = false)
	private LocalDateTime writeDay;
}