package com.bell.thingdong.domain.objet.dto;

import com.bell.thingdong.domain.objet.entity.Objet;
import com.bell.thingdong.domain.objet.entity.UserObject;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FindObjectDto {
	private UserObject userObject;
	private Objet objet;
}
