package com.talentpool.businessregistry.model.usuario.candidato;

import java.util.Date;

import javax.validation.constraints.Size;

import com.talentpool.businessregistry.model.enuns.TipoCompetencia;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "competencia")
public class Competencia {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Enumerated(EnumType.STRING)
	@Column(name = "tipo", length = 50)
	private TipoCompetencia tipo;

	@Column(name = "titulo", length = 70)
	private String titulo;

	@Column(name = "nivel", length = 200)
	private String nivel;

	@Column(name = "instituicao", length = 70)
	private String instituicao;

	@Column(name = "data_inicio")
	@Size(max = 10, min = 10)
	private Date dataInicio;

	@Column(name = "data_termino")
	@Size(max = 10, min = 10)
	private Date dataTermino;

	@ManyToOne
	@JoinColumn(name = "candidato_id", referencedColumnName = "id")
	private Candidato candidato;
}
