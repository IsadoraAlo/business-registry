package com.talentpool.businessregistry.model.usuario;

import javax.validation.constraints.Size;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "endereco")
public class Endereco {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "pais")
	@Size(max = 6)
    private String pais;
	
	@Column(name = "estado")
	@Size(max = 2)
    private String estado;
	
	@Column(name = "municipio")
	@Size(max = 100)
    private String municipio;
	
	@Column(name = "logradouro")
	@Size(max = 100)
    private String logradouro;
	
	@Column(name = "cep")
	@Size(max = 8)
    private String cep;
	
	@Column(name = "numero")
	@Size(max = 5)
    private String numero;
	
	@Column(name = "usuario_id")
    private long usuarioId;	
}
