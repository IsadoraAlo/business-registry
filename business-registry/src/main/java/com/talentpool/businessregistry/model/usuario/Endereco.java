package com.talentpool.businessregistry.model.usuario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	
	@Column(name = "pais", length=6)
    private String pais;
	
	@Column(name = "estado", length=2)
    private String estado;
	
	@Column(name = "municipio", length=100)
    private String municipio;
	
	@Column(name = "logradouro", length=100)
    private String logradouro;
	
	@Column(name = "cep", length=8)
    private String cep;
	
	@Column(name = "numero", length=5)
    private String numero;
	
	@ManyToOne
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private Usuario usuario;
	
}
