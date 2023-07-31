package com.talentpool.businessregistry.model.usuario;

import java.util.List;

import com.talentpool.businessregistry.model.vaga.Vaga;

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
@Table(name = "usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "tipo", nullable=false, length=9)
	private String tipo;
	
	@Column(name = "nome", nullable=false, length=50)
	private String nome;
	
	@Column(name = "email", nullable=false, length=70)
	private String email;
	
	@Column(name = "documento", nullable=false, length=18)
	private String documento;
	
	@Column(name = "senha", nullable=false, length=30)
	private String senha;
	
	@Column(name = "celular", length=15)
	private String celular;
	
	@Column(name = "status")
	private Boolean status;
	
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id")
	private List<Endereco> enderecos;
	
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id")
	private List<Vaga> vagas;
	
	public Usuario() {
		
	}
	
	public Usuario(String tipo, String nome, String email, String documento, String senha, String celular,
			boolean status, List<Endereco> enderecos) {
		super();
		this.tipo = tipo;
		this.nome = nome;
		this.email = email;
		this.documento = documento;
		this.senha = senha;
		this.celular = celular;
		this.status = status;
		this.enderecos = enderecos;
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

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public List<Endereco> getEnderecos() {
		return enderecos;
	}

	public void setEnderecos(List<Endereco> enderecos) {
		this.enderecos = enderecos;
	}
	
}