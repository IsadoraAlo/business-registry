package com.talentpool.businessregistry.model.vaga.questionario;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "questionario")
public class Questionario {
	@Id
	private long id;
	    
    @JoinColumn(name = "pontuacao_total")
    private Integer pontuacaoTotal;
    
	@Column(name = "prazo_envio")
    private Date prazoEnvio;
}
