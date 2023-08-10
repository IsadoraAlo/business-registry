package com.talentpool.businessregistry.model.vaga;

import java.util.List;

import com.talentpool.businessregistry.model.usuario.candidato.Candidato;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "vaga")
public class Vaga {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "titulo", length=70)
	private String titulo;
	
	@Column(name = "qualificacoes", length=100)
	private String qualificacoes;
	
	@Column(name = "beneficios", length=100)
	private String beneficios;
	
	@Column(name = "area_atuacao", length=100)
	private String areaAtuacao;
	
	@Column(name = "cargo", length=100)
	private String cargo;
	
	@Column(name = "inclusao", length=100)
	private String inclusao;
	
	@Column(name = "info_adicional", length=100)
	private String infoAdicional;
	
	@Column(name = "status", length=100)
	private Boolean status;
	
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "vaga_id")
	private List<Etapa> etapas;
	
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "vaga_id")
	private List<Candidato> candidatos;
	
	public Vaga() {
		
	}

	public Vaga(String titulo, String qualificacoes, String beneficios, String areaAtuacao, String cargo,
			String inclusao, String infoAdicional, Boolean status, List<Etapa> etapas, List<Candidato> candidatos) {
		super();
		this.titulo = titulo;
		this.qualificacoes = qualificacoes;
		this.beneficios = beneficios;
		this.areaAtuacao = areaAtuacao;
		this.cargo = cargo;
		this.inclusao = inclusao;
		this.infoAdicional = infoAdicional;
		this.status = status;
		this.etapas = etapas;
		this.candidatos = candidatos;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getQualificacoes() {
		return qualificacoes;
	}

	public void setQualificacoes(String qualificacoes) {
		this.qualificacoes = qualificacoes;
	}

	public String getBeneficios() {
		return beneficios;
	}

	public void setBeneficios(String beneficios) {
		this.beneficios = beneficios;
	}

	public String getAreaAtuacao() {
		return areaAtuacao;
	}

	public void setAreaAtuacao(String areaAtuacao) {
		this.areaAtuacao = areaAtuacao;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getInclusao() {
		return inclusao;
	}

	public void setInclusao(String inclusao) {
		this.inclusao = inclusao;
	}

	public String getInfoAdicional() {
		return infoAdicional;
	}

	public void setInfoAdicional(String infoAdicional) {
		this.infoAdicional = infoAdicional;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public List<Etapa> getEtapas() {
		return etapas;
	}

	public void setEtapas(List<Etapa> etapas) {
		this.etapas = etapas;
	}

	public List<Candidato> getCandidatos() {
		return candidatos;
	}

	public void setCandidatos(List<Candidato> candidatos) {
		this.candidatos = candidatos;
	}
}
