package com.talentpool.businessregistry.model.vaga;

import java.util.List;

import com.talentpool.businessregistry.model.vaga.questionario.Questionario;

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
@Table(name = "etapa")
public class Etapa {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "tipo", length=15)
	private String tipo;
    
	@Column(name = "descricao", length=200)
	private String descricao;
    
	@Column(name = "numeracao")
	private Integer numeracao;
    
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "etapa_id")
	private List<Questionario> questionario;
    
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "etapa_id")
	private List<Entrevista> entrevista;
	
	public Etapa() {
		
	}

	public Etapa(String tipo, String descricao, Integer numeracao, List<Questionario> questionario,
			List<Entrevista> entrevista) {
		super();
		this.tipo = tipo;
		this.descricao = descricao;
		this.numeracao = numeracao;
		this.questionario = questionario;
		this.entrevista = entrevista;
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

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getNumeracao() {
		return numeracao;
	}

	public void setNumeracao(Integer numeracao) {
		this.numeracao = numeracao;
	}

	public List<Questionario> getQuestionario() {
		return questionario;
	}

	public void setQuestionario(List<Questionario> questionario) {
		this.questionario = questionario;
	}

	public List<Entrevista> getEntrevista() {
		return entrevista;
	}

	public void setEntrevista(List<Entrevista> entrevista) {
		this.entrevista = entrevista;
	}	

}
