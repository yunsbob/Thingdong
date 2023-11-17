package com.bell.thingdong.domain.guestbook.entity;

import java.time.LocalDate;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.bell.thingdong.domain.user.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity
@Table(name = "guest_books", indexes = {@Index(name = "idx_guestbook_owner_id", columnList = "owner_id")})
public class GuestBook {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "guest_book_id", nullable = false)
	private Long guestBookId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "owner_id", nullable = false)
	private User owner;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "writer_id", nullable = false)
	private User writer;

	@Column(name = "content", nullable = false)
	private String content;

	@CreatedDate
	@Column(name = "write_day", updatable = false)
	private LocalDate writeDay;
}