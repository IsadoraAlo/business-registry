package com.talentpool.businessregistry.model.usuario.candidato;

import java.util.List;

import com.talentpool.businessregistry.model.usuario.Usuario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "candidato")
public class Candidato {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "etnia", length=15)
	private String etnia;
	
	@Column(name = "genero", length=9)
	private String genero;
	
	@Column(name = "deficiencia", length=45)
	private String deficiencia;
	
	@Column(name = "renda_familiar", length=10)
	private String rendaFamiliar;
	
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "candidato_id")
	private List<Competencia> competencias;
	
	@OneToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	
	public Candidato() {
		
	}

	public Candidato(String etnia, String genero, String deficiencia, String rendaFamiliar,
			List<Competencia> competencias, Usuario usuario) {
		super();
		this.etnia = etnia;
		this.genero = genero;
		this.deficiencia = deficiencia;
		this.rendaFamiliar = rendaFamiliar;
		this.competencias = competencias;
		this.usuario = usuario;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEtnia() {
		return etnia;
	}

	public void setEtnia(String etnia) {
		this.etnia = etnia;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getDeficiencia() {
		return deficiencia;
	}

	public void setDeficiencia(String deficiencia) {
		this.deficiencia = deficiencia;
	}

	public String getRendaFamiliar() {
		return rendaFamiliar;
	}

	public void setRendaFamiliar(String rendaFamiliar) {
		this.rendaFamiliar = rendaFamiliar;
	}

	public List<Competencia> getCompetencias() {
		return competencias;
	}

	public void setCompetencias(List<Competencia> competencias) {
		this.competencias = competencias;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
}