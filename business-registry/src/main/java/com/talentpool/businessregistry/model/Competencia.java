package com.talentpool.businessregistry.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ompetencia")
public class Competencia {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "tipo", length=30)
	private String tipo;
	
	@Column(name = "titulo", length=70)
	private String titulo;

	@Column(name = "nivel", length=15)
	private String nivel;

	@Column(name = "instituicao", length=70)
	private String instituicao;
}
