package com.talentpool.businessregistry.model.vaga;

import java.util.Date;
import java.util.List;

import javax.validation.constraints.Size;

import com.talentpool.businessregistry.model.usuario.Usuario;
import com.talentpool.businessregistry.model.usuario.candidato.Candidato;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "vaga")
public class Vaga {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "data_publicacao")
    private Date dataPublicacao;
	
	@Column(name = "titulo")
	@Size(max = 70)
	private String titulo;
	
	@Column(name = "pretencao_salarial")
	@Size(max = 16)
	private String pretencaoSalarial;
	
	@Column(name = "modalidade")
	@Size(max = 10)
	private String modalidade;
	
	@Column(name = "areaAtuacao")
	@Size(max = 45)
	private String areaAtuacao;
    
	@Column(name = "qualificacoes")
	@Size(max = 250)
	private String qualificacoes;
	
	@Column(name = "responsabilidades")
	@Size(max = 250)
	private String responsabilidades;
	
	@Column(name = "beneficios", length=250)
	@Size(max = 250)
	private String beneficios;
	
	@Column(name = "vaga_pcd")
	private Boolean vagaPcd;
	
	@Column(name = "deficiencia")
	@Size(max = 35)
	private String deficiencia;
	
	@Column(name = "cargo", length=20)
	private String cargo;
	
	@Column(name = "status")
	private Boolean status;
	
	@ManyToOne
	@JoinColumn(name = "usuario_id", referencedColumnName = "id")
	private Usuario usuario;
	
	@OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "vaga_id")
	private List<Candidato> candidatos;
}
