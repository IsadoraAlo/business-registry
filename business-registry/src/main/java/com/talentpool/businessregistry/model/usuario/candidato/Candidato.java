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
	
}