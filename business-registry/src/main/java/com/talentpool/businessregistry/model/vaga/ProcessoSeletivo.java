package com.talentpool.businessregistry.model.vaga;

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
@Table(name = "processo_seletivo")
public class ProcessoSeletivo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id; 
	
	@Column(name = "candidato_id")
	private long candidatoId; 
	
	@Column(name = "vaga_id")
	private long vagaId; 
	
	@Column(name = "etapa_id")
	private long etapaId; 
	
	@Column(name = "pontuacao_candidato")
	private Integer pontuacaoCandidato;
	
	@Column(name = "candidato_aprovado")
	private Boolean candidatoAprovado;
	
	@Column(name = "candidato_reprovado")
	private Boolean candidatoReprovado;
}
