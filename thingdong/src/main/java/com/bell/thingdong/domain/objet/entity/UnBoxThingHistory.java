package com.bell.thingdong.domain.objet.entity;

import java.time.LocalDate;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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
@Table(name = "un_box_thing_history", indexes = {@Index(name = "idx_unboxthinghistory_user_id", columnList = "user_id")})
public class UnBoxThingHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "unboxthing_history_id", nullable = false)
	private Long unBoxThingHistoryId;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "object_id", nullable = false)
	private Objet objet;

	@Column(name = "user_id", nullable = false)
	private Long userId;

	@Column(name = "object_name", nullable = false)
	private String objetName;

	@CreatedDate
	@Column(name = "purchase_day", updatable = false)
	private LocalDate purchaseDay;
}
