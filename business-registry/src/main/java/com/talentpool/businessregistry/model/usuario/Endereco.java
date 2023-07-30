package com.talentpool.businessregistry.model.usuario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "endereco")
public class Endereco {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "pais", length=6)
    private String pais;
	
	@Column(name = "estado", length=2)
    private String estado;
	
	@Column(name = "municipio", length=100)
    private String municipio;
	
	@Column(name = "numero", length=5)
    private String numero;
	
	public Endereco() {
		
	}

	public Endereco(long id, String pais, String estado, String municipio, String numero) {
		super();
		this.id = id;
		this.pais = pais;
		this.estado = estado;
		this.municipio = municipio;
		this.numero = numero;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getMunicipio() {
		return municipio;
	}

	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}
	
}
