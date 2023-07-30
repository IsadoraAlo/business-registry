package com.talentpool.businessregistry.model.vaga.questionario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "resposta")
public class Resposta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "alternativa_correta")
	private Boolean alternativaCorreta;
    
	@Column(name = "alternativa", length=100)
	private String alternativa;
    
	@Column(name = "dissertativa", length=200)
	private String dissertativa;
	
	public Resposta() {
		
	}

	public Resposta(Boolean alternativaCorreta, String alternativa, String dissertativa) {
		super();
		this.alternativaCorreta = alternativaCorreta;
		this.alternativa = alternativa;
		this.dissertativa = dissertativa;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Boolean getAlternativaCorreta() {
		return alternativaCorreta;
	}

	public void setAlternativaCorreta(Boolean alternativaCorreta) {
		this.alternativaCorreta = alternativaCorreta;
	}

	public String getAlternativa() {
		return alternativa;
	}

	public void setAlternativa(String alternativa) {
		this.alternativa = alternativa;
	}

	public String getDissertativa() {
		return dissertativa;
	}

	public void setDissertativa(String dissertativa) {
		this.dissertativa = dissertativa;
	}
	
}
