package com.talentpool.businessregistry.model.vaga;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "entrevista")
public class Entrevista {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "descricao", length=200)
	private String descricao;
	
	@Column(name = "descricao", length=100)
	private String link;
	
	@Column(name = "data")
    private Date data;
	
	public Entrevista() {
		
	}

	public Entrevista(String descricao, String link, Date data) {
		super();
		this.descricao = descricao;
		this.link = link;
		this.data = data;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}   
}
