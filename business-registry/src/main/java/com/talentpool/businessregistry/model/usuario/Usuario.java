package com.talentpool.businessregistry.model.usuario;

import java.util.Collection;
import java.util.List;

import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.talentpool.businessregistry.model.enuns.TipoUsuario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@SuppressWarnings("serial")
@Entity
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "usuario")
public class Usuario implements UserDetails{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "tipo", nullable=false)
	private TipoUsuario tipo;
	
	@Column(name = "nome", nullable=false)
	@Size(max = 50)
	private String nome;
	
	@Column(name = "email", nullable=false)
	@Size(max = 70)
	private String email;
	
	@Column(name = "documento", nullable=false)
	@Size(max = 14, min = 11)
	private String documento;
	
	@Column(name = "senha", nullable=false)
	@Size(max = 30, min = 8)
	private String senha;
	
	@Column(name = "celular")
	@Size(max = 11, min = 11)
	private String celular;
	
	@Column(name = "sobre")
	@Size(max = 200, min = 0)
	private String sobre;
	
	@Column(name = "status")
	private Boolean status;
	
//	@OneToMany(fetch = LAZY, cascade = ALL)
//    @JoinColumn(name = "usuario_id")
//	private List<Vaga> vagas;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		if(this.tipo == TipoUsuario.ADMIN) {
			return List.of(new SimpleGrantedAuthority("ADMIN"));	
		} 
		else if(this.tipo == TipoUsuario.EMPRESA) {
			return List.of(new SimpleGrantedAuthority("EMPRESA"));	
		}
		else {
			return List.of(new SimpleGrantedAuthority("CANDIDATO"));
		}
	}

	@Override
	public String getPassword() {
		return this.senha;
	}

	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
}
