package com.talentpool.businessregistry.model.vaga.questionario;

import java.util.List;

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
@Table(name = "questionario")
public class Questionario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "questionario_id")
	private List<Resposta> respostas;
	
	@Column(name = "pergunta", nullable=false, length=200)
    private String pergunta;
    
    @JoinColumn(name = "pontuacao")
    private Integer pontuacao;
    
    public Questionario() {
    	
    }

	public Questionario(List<Resposta> respostas, String pergunta, Integer pontuacao) {
		super();
		this.respostas = respostas;
		this.pergunta = pergunta;
		this.pontuacao = pontuacao;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Resposta> getRespostas() {
		return respostas;
	}

	public void setRespostas(List<Resposta> respostas) {
		this.respostas = respostas;
	}

	public String getPergunta() {
		return pergunta;
	}

	public void setPergunta(String pergunta) {
		this.pergunta = pergunta;
	}

	public Integer getPontuacao() {
		return pontuacao;
	}

	public void setPontuacao(Integer pontuacao) {
		this.pontuacao = pontuacao;
	}

}
