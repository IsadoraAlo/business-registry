package com.talentpool.businessregistry.model.vaga.questionario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "resposta")
public class Resposta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@JoinColumn(name = "pergunta_id")
	private long perguntaId;

	@Column(name = "alternativa_correta")
	private Boolean alternativaCorreta;

	@Column(name = "alternativa")
	private String alternativa;

	@Column(name = "dissertativa")
	private String dissertativa;
}
