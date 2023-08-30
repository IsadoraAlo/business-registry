package com.talentpool.businessregistry.model.usuario.candidato;

import static jakarta.persistence.GenerationType.IDENTITY;

import javax.validation.constraints.Size;

import com.talentpool.businessregistry.model.usuario.Usuario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
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
    private Long id;
	
	@Column(name = "etnia")
	@Size(max = 20)
	private String etnia;
	
	@Column(name = "genero")
	@Size(max = 35)
	private String genero;
	
	@Column(name = "deficiencia")
	@Size(max = 35)
	private String deficiencia;
	
	@Column(name = "renda_familiar")
	@Size(max = 16)
	private String rendaFamiliar;
	
}