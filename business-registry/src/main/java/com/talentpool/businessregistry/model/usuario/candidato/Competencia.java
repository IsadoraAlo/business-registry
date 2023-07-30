package com.talentpool.businessregistry.model.usuario.candidato;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "competencia")
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
	
	public Competencia() {
		
	}

	public Competencia(String tipo, String titulo, String nivel, String instituicao) {
		super();
		this.tipo = tipo;
		this.titulo = titulo;
		this.nivel = nivel;
		this.instituicao = instituicao;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public String getInstituicao() {
		return instituicao;
	}

	public void setInstituicao(String instituicao) {
		this.instituicao = instituicao;
	}
	
}
