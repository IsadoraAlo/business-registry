package com.talentpool.businessregistry.model.usuario;

import javax.validation.constraints.Size;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@EqualsAndHashCode(of = "id")
@Table(name = "status_geral")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Getter
@Setter
public class StatusGeral {
	@Id
	private long id;
	
	@Column(name = "is_usuario_banido")
	private Boolean isUsuarioBanido;
	
	@Column(name = "is_usuario_desativado")
	private Boolean isUsuarioDesativado;
	
	@Column(name = "motivo")
	@Size(max = 500, min = 0)
	private String motivo;
}
