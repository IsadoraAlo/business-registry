package com.talentpool.businessregistry.model.vaga;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "entrevista")
public class Entrevista {
	@Id
	private long id;
	
	@Column(name = "link")
	private String link;
	
	@Column(name = "data")
    private Date data;
}
