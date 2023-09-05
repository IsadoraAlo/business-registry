package com.talentpool.businessregistry.model.vaga;

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
@Table(name = "etapa")
public class Etapa {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "tipo", length = 15)
	private String tipo;

	@Column(name = "titulo")
	@Size(max = 70)
	private String titulo;

	@Column(name = "descricao")
	@Size(max = 250)
	private String descricao;

	@Column(name = "numeracao")
	private Integer numeracao;

	@Column(name = "vaga_id")
	private long vagaId;
}
